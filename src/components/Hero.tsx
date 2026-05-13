import React from 'react';
import Image from 'next/image';

import AppStoreButton from './AppStoreButton';
import PlayStoreButton from './PlayStoreButton';

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

            <div className="text-center max-w-3xl mx-auto">
                
                {/* Headline */}
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
                    Smart QR Codes & Digital Tools to Grow Your Business Faster
                </h1>

                {/* Subheadline */}
                <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
                    Create, share, and manage powerful digital tools that turn visitors into customers.
                    Simple, fast, and built for modern businesses.
                </p>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <AppStoreButton dark />
                    <PlayStoreButton dark />
                </div>

                {/* Image */}
                <div className="mt-14">
                    <Image
                        src="/images/hero-mockup.png"
                        width={420}
                        height={360}
                        quality={100}
                        priority
                        unoptimized
                        alt="app mockup"
                        className="mx-auto drop-shadow-2xl"
                    />
                </div>

                {/* Trust line */}
                <p className="mt-8 text-sm text-slate-500">
                    Trusted by modern businesses building smarter digital experiences
                </p>
            </div>
        </section>
    );
};

export default Hero;
