import { Building2, Award } from 'lucide-react';
import { CERTIFICATIONS } from '@/data/certifications';

export default function CertificationsSection() {
  return (
    <section id="certificates" className="py-24 px-6 relative bg-black/20">
      <div className="max-w-6xl mx-auto relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            <span className="text-primary text-glow">Certifications</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Credentials that validate my expertise in AI and machine learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((item, index) => (
            <div
              key={index}
              className="glass-strong p-6 rounded-2xl hover-elevate transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                {/* Organization Logo */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl glass flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-contain p-2" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-lg font-bold mb-2 text-glow group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <div className="space-y-1 text-sm text-foreground/70">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-primary" />
                      <span>{item.organization}</span>
                    </div>
                  </div>

                  <div className="mt-3">
                    <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium glass rounded-full glow-sm">
                      <Award className="w-3 h-3" />
                      {item.inProgress ? 'In Progress' : 'Certification'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
