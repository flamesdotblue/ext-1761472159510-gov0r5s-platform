import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] md:min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white/80" />
      </div>

      <div className="relative z-10 mx-auto flex h-[80vh] md:h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900">
          Hello, world
        </h1>
        <p className="mt-4 max-w-2xl text-base md:text-lg text-gray-700">
          A minimalist interactive cover powered by a Spline scene. Explore the grid and watch it ripple.
        </p>
        <div className="mt-8 flex items-center gap-3">
          <a
            href="#features"
            className="rounded-md bg-gray-900 px-5 py-2.5 text-white text-sm md:text-base font-medium hover:bg-gray-800 transition-colors"
          >
            Get Started
          </a>
          <a
            href="#cta"
            className="rounded-md border border-gray-300 bg-white px-5 py-2.5 text-sm md:text-base font-medium text-gray-900 hover:bg-gray-50 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
