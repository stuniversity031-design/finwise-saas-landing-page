import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 -z-10 w-full">
                <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-100" />
                <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            {/* Glow effect */}
            <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-200 blur-[120px] opacity-30 rounded-full -z-10" />

            <div className="text-center max-w-4xl mx-auto">

                {/* Headline */}
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                    AI-Powered Websites, Animations & Digital Tools Built for the Future
                </h1>

                {/* Subheadline */}
                <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                    I design and build premium websites, animated media, apps, and AI solutions
                    that make brands stand out and operate smarter.
                </p>

                {/* CTA Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="#demo"
                        className="px-8 py-3 bg-black text-white rounded-xl font-semibold hover:opacity-90 transition"
                    >
                        Request a Demo
                    </a>

                    <a
                        href="#pricing"
                        className="px-8 py-3 border border-black rounded-xl font-semibold hover:bg-black hover:text-white transition"
                    >
                        View Services
                    </a>
                </div>

                {/* Image */}
                <div className="mt-16">
                    <Image
                        src="/images/hero-mockup.png"
                        width={460}
                        height={380}
                        quality={100}
                        priority
                        unoptimized
                        alt="digital services mockup"
                        className="mx-auto drop-shadow-2xl"
                    />
                </div>

                {/* Trust line */}
                <p className="mt-10 text-sm text-slate-500">
                    Websites • Animations • AI Tools • Apps • Automation for modern brands
                </p>
            </div>
        </section>
    );
};

export default Hero;