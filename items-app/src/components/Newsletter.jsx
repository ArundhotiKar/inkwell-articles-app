const Newsletter = () => {
  return (
    <section className="bg-[#fbf7f2] py-20 px-6">
      <div className="max-w-3xl mx-auto text-center bg-white p-10 rounded-3xl shadow-sm">

        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
          Stay in the loop
        </h2>

        <p className="text-gray-600 mb-8 leading-relaxed">
          Get our weekly digest of handpicked articles, tips, and insights
          delivered straight to your inbox. No spam, unsubscribe anytime.
        </p>

        {/* Input */}
        <form className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <button
            type="submit"
            className="bg-orange-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-600 transition"
          >
            Subscribe
          </button>
        </form>

        <p className="text-sm text-gray-500">
          Join <span className="font-semibold text-gray-800">10,000+</span> subscribers already receiving our updates
        </p>

      </div>
    </section>
  );
};

export default Newsletter;
