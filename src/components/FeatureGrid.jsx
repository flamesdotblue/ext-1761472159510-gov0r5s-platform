import { Rocket, Star, Shield } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Fast Setup',
    desc: 'Vite + React + Tailwind gives you instant feedback and speedy builds.'
  },
  {
    icon: Star,
    title: 'Polished UI',
    desc: 'Clean typography, subtle gradients, and responsive spacing out of the box.'
  },
  {
    icon: Shield,
    title: 'Reliable',
    desc: 'Well-structured components with clear responsibilities and maintainable code.'
  }
];

function FeatureCard({ Icon, title, desc }) {
  return (
    <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-colors hover:border-gray-300">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function FeatureGrid() {
  return (
    <section id="features" className="relative w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
            Everything you need to say hello to the world
          </h2>
          <p className="mt-3 text-gray-600">
            Build a modern landing page with interactive visuals and a simple component architecture.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <FeatureCard key={f.title} Icon={f.icon} title={f.title} desc={f.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureGrid;
