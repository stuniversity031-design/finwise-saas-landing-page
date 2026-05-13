import React from 'react';

const Benefits = () => {
    return (
        <div className="grid md:grid-cols-3 gap-6">

            <div className="p-6 bg-white border rounded-2xl shadow-sm hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-slate-900">
                    AI Websites & Landing Pages
                </h3>
                <p className="mt-2 text-slate-600">
                    High-converting websites built with modern frameworks, animations, and AI integrations
                    that make your brand look premium and future-ready.
                </p>
            </div>

            <div className="p-6 bg-white border rounded-2xl shadow-sm hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-slate-900">
                    Animations, Clips & Visual Content
                </h3>
                <p className="mt-2 text-slate-600">
                    Custom animated clips, motion graphics, cartoon visuals, and AI-generated media
                    for YouTube, ads, apps, and digital storytelling.
                </p>
            </div>

            <div className="p-6 bg-white border rounded-2xl shadow-sm hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-slate-900">
                    Apps, Automation & AI Tools
                </h3>
                <p className="mt-2 text-slate-600">
                    From smart apps to workflow automation and AI assistants, I build tools that
                    save time, increase reach, and create real digital leverage for your business.
                </p>
            </div>

        </div>
    );
};

export default Benefits;