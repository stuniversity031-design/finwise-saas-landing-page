import React from 'react';

const Benefits = () => {
    return (
        <div className="grid md:grid-cols-3 gap-6">

            {/* Feature 1 */}
            <div className="p-6 bg-white border rounded-2xl shadow-sm hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-slate-900">
                    Instant QR Code Generation
                </h3>
                <p className="mt-2 text-slate-600">
                    Create high-quality, scannable QR codes instantly for websites, products, menus, or digital campaigns.
                </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-white border rounded-2xl shadow-sm hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-slate-900">
                    Built for Real Business Use
                </h3>
                <p className="mt-2 text-slate-600">
                    Designed to help businesses turn offline and online traffic into measurable customer engagement.
                </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-white border rounded-2xl shadow-sm hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-slate-900">
                    Fast, Clean & Ready to Share
                </h3>
                <p className="mt-2 text-slate-600">
                    Generate and share QR codes in seconds across flyers, packaging, websites, and social media.
                </p>
            </div>

        </div>
    );
};

export default Benefits;
