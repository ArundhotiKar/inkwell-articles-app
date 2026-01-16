const stats = [
  {
    value: "500+",
    title: "Published Articles",
    description: "High-quality content across all categories",
  },
  {
    value: "50K+",
    title: "Monthly Readers",
    description: "Growing community of curious minds",
  },
  {
    value: "98%",
    title: "Reader Satisfaction",
    description: "Based on reader feedback surveys",
  },
  {
    value: "15+",
    title: "Industry Awards",
    description: "Recognition for editorial excellence",
  },
];

const Impact = () => {
  return (
    <section className="bg-[#fbf7f2] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        
        <p className="text-orange-500 font-semibold uppercase tracking-wide mb-3">
          Impact
        </p>

        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-14">
          Numbers That Matter
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-4xl font-bold text-orange-500 mb-2">
                {stat.value}
              </h3>
              <h4 className="font-semibold text-lg text-gray-900 mb-2">
                {stat.title}
              </h4>
              <p className="text-gray-600 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Impact;
