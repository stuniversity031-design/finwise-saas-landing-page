import React from 'react';

const Benefits = () => {
    return (
        <div className="grid md:grid-cols-3 gap-6">

            <div className="p-6 bg-white border rounded-2xl shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">Instant QR Creation</h3>
                <p className="mt-2 text-slate-600">
                    Generate high-quality QR codes in seconds for links, products, or business pages.
                </p>
            </div>

            <div className="p-6 bg-white border rounded-2xl shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">Smart Sharing Tools</h3>
                <p className="mt-2 text-slate-600">
                    Share your QR codes anywhere and track engagement through simple insights.
                </p>
            </div>

            <div className="p-6 bg-white border rounded-2xl shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">Business-Ready Templates</h3>
                <p className="mt-2 text-slate-600">
                    Prebuilt designs that help you launch faster and look professional instantly.
                </p>
            </div>

        </div>
    );
};

export default Benefits;
