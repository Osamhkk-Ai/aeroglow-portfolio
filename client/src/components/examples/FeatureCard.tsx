import FeatureCard from '../FeatureCard';
import { Zap } from 'lucide-react';

export default function FeatureCardExample() {
  return (
    <div className="p-8">
      <FeatureCard
        icon={Zap}
        title="Lightning Fast"
        description="Experience blazing fast performance with our optimized infrastructure and cutting-edge technology stack."
      />
    </div>
  );
}