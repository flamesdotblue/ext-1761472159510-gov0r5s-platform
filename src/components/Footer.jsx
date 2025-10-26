function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Hello World. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#cta" className="hover:text-gray-900">Get Started</a>
          <a href="https://spline.design" target="_blank" rel="noreferrer" className="hover:text-gray-900">Spline</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
