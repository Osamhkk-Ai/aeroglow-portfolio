import { User } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            About <span className="text-primary text-glow">Me</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Passionate AI Engineer dedicated to creating intelligent solutions
          </p>
        </div>

        <div className="glass-strong p-8 lg:p-12 rounded-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Image Placeholder */}
            {/* Image Placeholder */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="w-64 h-64 rounded-2xl glass flex items-center justify-center overflow-hidden group hover-elevate transition-all duration-300">
                <img 
                  src="/image_v2.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-2 space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                AI Engineer specializing in Generative AI, LLMs, and data-driven automation.
              </p>
              <p>
                Experienced in NLP, Computer Vision, machine learning pipelines, and RAG systems using Python, PyTorch, Hugging Face, and LangChain.
              </p>
              <p>
                Background includes a B.Sc. in Artificial Intelligence, top performance at the Saudi Digital Academy Data & AI Bootcamp, and hands-on data engineering experience at the Saudi National Bank.
              </p>
              <p>
                I build practical AI solutions that enhance efficiency, improve decision-making, and solve real operational challenges across different industries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}