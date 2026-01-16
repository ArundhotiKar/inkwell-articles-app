const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              Inkwell
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              A home for thinkers, dreamers, and creators.  
              We believe great ideas deserve a beautiful voice.
            </p>
            <p className="text-sm text-gray-500">
              Writing. Reading. Growing together.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition">Articles</a></li>
              <li><a href="#" className="hover:text-white transition">Categories</a></li>
              <li><a href="#" className="hover:text-white transition">Write a Story</a></li>
              <li><a href="#" className="hover:text-white transition">Community</a></li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Stay in the loop
            </h4>
            <p className="text-gray-400 mb-5">
              Get thoughtful stories delivered straight to your inbox.
            </p>

            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-xl bg-[#020617] text-gray-200 placeholder-gray-500 outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="bg-orange-500 px-5 py-3 rounded-xl font-semibold text-white hover:bg-orange-600 transition">
                →
              </button>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Inkwell. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
