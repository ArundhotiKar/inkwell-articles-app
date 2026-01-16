const CTA = () => {
  return (
    <section className="bg-[#fbf7f2] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center bg-white rounded-3xl p-12 shadow-sm">
        
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
          Ready to share your ideas with the world?
        </h2>

        <p className="text-gray-600 text-lg mb-10">
          Join thousands of writers and readers who are building, learning,
          and growing together on Inkwell.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-600 transition">
            Start Writing
          </button>

          <button className="border border-gray-300 px-8 py-3 rounded-xl font-semibold text-gray-700 hover:bg-gray-100 transition">
            Explore Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
