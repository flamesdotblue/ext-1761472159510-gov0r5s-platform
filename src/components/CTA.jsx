function CTA() {
  return (
    <section id="cta" className="relative w-full bg-gradient-to-b from-white to-gray-50/60">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-2xl bg-gray-900 px-8 py-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Ready to launch your next idea?
          </h3>
          <p className="mt-3 text-white/80">
            Start with a beautiful hero, add a few sections, and you are good to go.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="#"
              className="rounded-md bg-white px-5 py-2.5 text-gray-900 font-medium hover:bg-white/90 transition-colors"
            >
              Say Hello
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
