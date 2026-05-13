import React from 'react';

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 px-6 bg-white">
            <div className="max-w-6xl mx-auto text-center">

                <h2 className="text-4xl font-bold text-slate-900">
                    Trusted by Founders, Creators, and Growing Businesses
                </h2>

                <p className="mt-6 text-lg text-slate-600">
                    Professional feedback from clients who needed high-quality digital execution.
                </p>

                <div className="mt-16 grid md:grid-cols-3 gap-8">

                    <div className="p-8 border rounded-2xl shadow-sm">
                        <p className="text-slate-700 leading-relaxed">
                            “The website delivered exceeded our expectations. The design, animations,
                            and structure positioned our company like an established tech brand.
                            It directly improved how customers engage with us online.”
                        </p>
                        <p className="mt-6 font-semibold text-slate-900">
                            — Operations Director, E-commerce Brand
                        </p>
                    </div>

                    <div className="p-8 border rounded-2xl shadow-sm">
                        <p className="text-slate-700 leading-relaxed">
                            “What stood out was the technical capability. Beyond visuals, we received
                            automation tools and AI integrations that streamlined our internal workflow
                            and saved significant time each week.”
                        </p>
                        <p className="mt-6 font-semibold text-slate-900">
                            — Founder, Digital Startup
                        </p>
                    </div>

                    <div className="p-8 border rounded-2xl shadow-sm">
                        <p className="text-slate-700 leading-relaxed">
                            “The animated media and visual assets elevated our content quality to a
                            professional level. Our audience immediately noticed the difference across
                            our YouTube and marketing channels.”
                        </p>
                        <p className="mt-6 font-semibold text-slate-900">
                            — Creative Director, Media Channel
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonials;