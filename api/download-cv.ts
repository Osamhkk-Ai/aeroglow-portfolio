import fs from 'fs';
import path from 'path';
import { IncomingMessage, ServerResponse } from 'http';

export default function handler(req: IncomingMessage, res: ServerResponse) {
    // Set CORS headers just in case
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.statusCode = 200;
        res.end();
        return;
    }

    const cvDir = path.join(process.cwd(), 'CV');

    try {
        if (!fs.existsSync(cvDir)) {
            console.error(`CV directory not found at: ${cvDir}`);
            res.statusCode = 404;
            res.end('CV directory not found');
            return;
        }

        const files = fs.readdirSync(cvDir);

        // Filter for common document types if needed, but requirement says "select first file"
        // We'll prioritize PDF but take the first file if no PDF is found
        const pdfFile = files.find(f => f.toLowerCase().endsWith('.pdf'));
        const targetFile = pdfFile || files[0];

        if (!targetFile) {
            res.statusCode = 404;
            res.end('No CV file found');
            return;
        }

        const filePath = path.join(cvDir, targetFile);
        const stat = fs.statSync(filePath);

        res.setHeader('Content-Length', stat.size);
        res.setHeader('Content-Type', 'application/pdf');
        // Use 'inline' to open in browser, 'attachment' to force download.
        // User said "open or download", usually opening is better UX.
        res.setHeader('Content-Disposition', `inline; filename="${targetFile}"`);

        const readStream = fs.createReadStream(filePath);
        readStream.pipe(res);

    } catch (error) {
        console.error('Error serving CV:', error);
        res.statusCode = 500;
        res.end('Internal Server Error');
    }
}
