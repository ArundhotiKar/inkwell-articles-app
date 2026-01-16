const AboutUs = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#fff8f1] to-[#fbf7f2] py-24 px-6 overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute -top-32 -right-32 w-96 h-80 bg-orange-200/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="inline-block text-orange-600 font-semibold uppercase tracking-widest mb-4">
            About Us
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight mb-6">
            A platform for <span className="text-orange-600">thinkers</span> & dreamers
          </h2>

          <p className="text-gray-600 mb-5 leading-relaxed">
            Inkwell was born from a simple belief — great ideas deserve beautiful
            presentation. We’ve created a home where writers share knowledge and
            readers discover meaningful stories.
          </p>

          

          {/* FEATURES */}
          <div className="space-y-8">
            {[
              {
                icon: "🎯",
                title: "Quality First",
                desc: "Every article is carefully crafted to provide real value and clarity."
              },
              {
                icon: "👥",
                title: "Community Driven",
                desc: "A growing network of passionate writers and curious readers."
              },
              {
                icon: "⚡",
                title: "Always Evolving",
                desc: "We embrace modern trends while honoring timeless storytelling."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 rounded-2xl hover:bg-white/70 transition"
              >
                <div className="bg-orange-100 p-3 rounded-xl text-2xl text-orange-600">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          
        </div>

        {/* RIGHT IMAGES */}
        <div className="grid grid-cols-2 gap-6">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt=""
            className="rounded-3xl object-cover w-full h-60 hover:scale-105 transition duration-500"
          />
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
            alt=""
            className="rounded-3xl object-cover w-full h-60 hover:scale-105 transition duration-500"
          />
          <img
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2"
            alt=""
            className="rounded-3xl object-cover w-full h-72 col-span-2 hover:scale-105 transition duration-500"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
