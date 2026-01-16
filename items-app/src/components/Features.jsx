import React from 'react';

const Features = () => {
    return (
        <section className="h-60 bg-white flex flex-col items-center justify-center text-center space-y-4">
            <h2 className="text-2xl font-bold">Featured</h2>
            <p className="text-gray-700">Editor's Picks — Handpicked stories that have resonated most with our community</p>
            <div className="flex flex-wrap justify-center gap-8 mt-4">
                <div className="flex flex-col items-center">
                    <span className="text-3xl font-extrabold">500+</span>
                    <span className="text-gray-600">Articles Published</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-3xl font-extrabold">50K+</span>
                    <span className="text-gray-600">Monthly Readers</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-3xl font-extrabold">100+</span>
                    <span className="text-gray-600">Expert Writers</span>
                </div>
            </div>
        </section>

    );
};

export default Features;