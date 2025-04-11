import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import Team from '../components/Team';
import Timeline from '../components/Timeline';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-dark pt-16">
      <Hero />
      <Introduction />
      <Timeline />
      <Team />
    </div>
  );
}