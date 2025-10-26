import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <main>
        <FeatureGrid />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
