import React from 'react';

const ProductDemo = () => {
    return (
        <section id="demo" className="py-24 px-6 bg-slate-50">
            <div className="max-w-6xl mx-auto text-center">

                <h2 className="text-4xl font-bold text-slate-900">
                    See What I Can Build For You
                </h2>

                <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
                    From high-converting websites to animated media, AI tools, and automation —
                    this is where ideas turn into powerful digital products.
                </p>

                {/* Demo preview cards */}
                <div className="mt-16 grid md:grid-cols-3 gap-8">

                    <div className="p-8 bg-white rounded-2xl shadow-md">
                        <h3 className="text-xl font-semibold text-slate-900">
                            Premium Websites
                        </h3>
                        <p className="mt-3 text-slate-600">
                            Modern, animated, and optimized sites that look like $10k+ agency builds.
                        </p>
                    </div>

                    <div className="p-8 bg-white rounded-2xl shadow-md">
                        <h3 className="text-xl font-semibold text-slate-900">
                            Animated Clips & Media
                        </h3>
                        <p className="mt-3 text-slate-600">
                            AI-assisted visuals, motion graphics, and content for YouTube, ads, and apps.
                        </p>
                    </div>

                    <div className="p-8 bg-white rounded-2xl shadow-md">
                        <h3 className="text-xl font-semibold text-slate-900">
                            AI Tools & Automation
                        </h3>
                        <p className="mt-3 text-slate-600">
                            Smart systems that save time, increase output, and create digital leverage.
                        </p>
                    </div>

                </div>

                <div className="mt-16">
                    <a
                        href="#pricing"
                        className="px-8 py-3 bg-black text-white rounded-xl font-semibold hover:opacity-90 transition"
                    >
                        View Service Packages
                    </a>
                </div>

            </div>
        </section>
    );
};

export default ProductDemo;