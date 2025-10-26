export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto relative z-20">
        <div className="glass-strong p-12 lg:p-16 rounded-3xl">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8 text-center">
            About <span className="text-primary text-glow">Me</span>
          </h2>
          
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              I'm passionate about artificial intelligence and building solutions that connect 
              humans and technology. With a strong foundation in machine learning, data science, 
              and software engineering, I create intelligent systems that solve real-world problems.
            </p>
            
            <p>
              My work spans across various domains including natural language processing, computer vision, 
              and predictive analytics. I believe in leveraging the power of AI to make meaningful 
              contributions to society, from preserving cultural heritage to enhancing accessibility 
              for those in need.
            </p>
            
            <p>
              When I'm not training models or analyzing data, I enjoy exploring new AI technologies, 
              contributing to open-source projects, and sharing knowledge with the developer community.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">Core Skills</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                'Python',
                'TensorFlow',
                'PyTorch',
                'Machine Learning',
                'Deep Learning',
                'NLP',
                'Computer Vision',
                'Data Analysis',
                'Neural Networks',
                'Scikit-learn',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm font-medium glass rounded-full glow-sm hover-elevate transition-all duration-300"
                  data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}