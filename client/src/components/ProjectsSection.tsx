import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Hekaya',
      description: 'Lihyanite Script Translator - An AI-powered system that translates ancient Lihyanite inscriptions, helping preserve and understand cultural heritage through advanced natural language processing and machine learning techniques.',
      technologies: ['Python', 'TensorFlow', 'NLP', 'Computer Vision'],
      link: '#',
    },
    {
      title: 'VTAC',
      description: 'Football Tactical Assistant - An intelligent AI system that analyzes football tactics, player formations, and game strategies to provide insights and recommendations for coaches and analysts.',
      technologies: ['Python', 'PyTorch', 'Computer Vision', 'Data Analytics'],
      link: '#',
    },
    {
      title: 'Blind Detection System',
      description: 'Smart Object Recognition for the Blind - A real-time object detection and recognition system designed to assist visually impaired individuals by identifying and describing objects in their environment through audio feedback.',
      technologies: ['Python', 'YOLOv8', 'OpenCV', 'Text-to-Speech'],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Featured <span className="text-primary text-glow">Projects</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Innovative AI solutions that make a real-world impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}