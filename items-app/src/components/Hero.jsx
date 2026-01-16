import React from 'react';

const Hero = () => {
    return (
        <section className="relative bg-gradient-to-r from-orange-50 to-white flex flex-col items-center justify-center text-center h-[70vh]">
        <div className="max-w-3xl space-y-6">
          <span className="inline-block bg-white px-4 py-1 rounded-full text-orange-600 font-medium shadow">
            Where ideas come to life
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            Stories that <span className="text-orange-600">inspire</span>, ideas that <span className="text-orange-600">transform</span>
          </h1>

          <p className="text-gray-600 text-lg md:text-xl">
            Discover thoughtfully crafted articles on design, technology, and creative living. Join a community of curious minds exploring what's next.
          </p>

          <div className="flex gap-4 justify-center">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-600 transition">
              Start Reading →
            </button>
            
          </div>
        </div>
      </section>
    );
};

export default Hero;