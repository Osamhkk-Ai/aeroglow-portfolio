import type { Express } from "express";
import { createServer, type Server } from "http";

import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // CV Download endpoint - يقرأ أي ملف من مجلد 0_UPDATE_INFO_HERE
  app.get("/api/download-cv", (req, res) => {
    const cvDir = path.join(process.cwd(), "0_UPDATE_INFO_HERE");
    
    try {
      // قراءة جميع الملفات في المجلد
      const files = fs.readdirSync(cvDir);
      
      if (files.length === 0) {
        return res.status(404).send("No CV file found in the directory");
      }
      
      // Select the CV itself and ignore helper files such as README.txt.
      const cvFileName = files.find((file) => file.toLowerCase().endsWith(".pdf"));

      if (!cvFileName) {
        return res.status(404).send("No PDF CV file found in the directory");
      }
      const cvPath = path.join(cvDir, cvFileName);
      
      // تحديد اسم التحميل بناءً على نوع الملف
      const ext = path.extname(cvFileName);
      const downloadName = `Osama_Alghamdi_CV${ext}`;
      
      res.download(cvPath, downloadName, (err) => {
        if (err) {
          console.error("Error downloading CV:", err);
          res.status(500).send("Error downloading CV");
        }
      });
    } catch (error) {
      console.error("Error reading CV directory:", error);
      res.status(500).send("Error accessing CV directory");
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
