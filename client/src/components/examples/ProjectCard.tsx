import ProjectCard from '../ProjectCard';

export default function ProjectCardExample() {
  return (
    <div className="p-8 max-w-md">
      <ProjectCard
        title="Hekaya"
        description="AI-powered translator for ancient Lihyanite script inscriptions, preserving cultural heritage through machine learning."
        technologies={['Python', 'TensorFlow', 'NLP']}
        link="#"
      />
    </div>
  );
}