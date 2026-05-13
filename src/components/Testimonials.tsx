import React from 'react';

const Testimonials = () => {
    return (
        <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="p-6 bg-white border rounded-2xl shadow-sm">
                <p className="text-slate-600">
                    “This made it insanely easy to share my business. QR codes actually brought in new customers.”
                </p>
                <p className="mt-4 font-semibold text-slate-900">— Small Business Owner</p>
            </div>

            <div className="p-6 bg-white border rounded-2xl shadow-sm">
                <p className="text-slate-600">
                    “Clean, fast, and super simple. Exactly what I needed for my shop.”
                </p>
                <p className="mt-4 font-semibold text-slate-900">— Retail Store Manager</p>
            </div>

            <div className="p-6 bg-white border rounded-2xl shadow-sm">
                <p className="text-slate-600">
                    “We replaced our old links with QR codes and saw more engagement instantly.”
                </p>
                <p className="mt-4 font-semibold text-slate-900">— Marketing Team</p>
            </div>

        </div>
    );
};

export default Testimonials;
