const testimonials = [
    {
        quote:
            "Inkwell has become my go-to source for design inspiration. The quality of articles here is unmatched.",
        name: "Jessica Park",
        role: "Product Designer at Figma",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        quote:
            "I've learned more from the practical articles here than from years of formal education. Truly valuable content.",
        name: "Michael Torres",
        role: "Senior Developer at Stripe",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        quote:
            "As a writer, the platform gives me the audience and tools I need to share my expertise effectively.",
        name: "Sarah Chen",
        role: "Tech Writer & Consultant",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
];

const Testimonials = () => {
    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <p className="text-orange-500 font-semibold uppercase tracking-wide mb-3">
                    Testimonials
                </p>

                <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-14">
                    Loved by Readers & Writers
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#fbf7f2] p-6 rounded-2xl shadow-sm text-left hover:shadow-md transition"
                        >
                            {/* Quote Icon */}
                            <div className="text-orange-400 text-2xl mb-2">“</div>

                            <p className="text-gray-700 mb-5 leading-relaxed text-sm">
                                {item.quote}
                            </p>

                            {/* Profile */}
                            <div className="flex items-center gap-3">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="font-semibold text-gray-900 text-sm">
                                        {item.name}
                                    </h4>
                                    <p className="text-gray-500 text-xs">
                                        {item.role}
                                    </p>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
