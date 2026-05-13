import React from 'react';

const Pricing = () => {
    return (
        <div className="grid md:grid-cols-3 gap-6 mt-10">

            {/* Starter */}
            <div className="border rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-slate-900">Starter</h3>
                <p className="text-slate-500 mt-2">Perfect for individuals testing digital tools</p>

                <div className="mt-6 text-3xl font-bold">$0</div>
                <p className="text-sm text-slate-500">Free forever</p>

                <ul className="mt-6 space-y-2 text-sm text-slate-600">
                    <li>✔ Basic QR code creation</li>
                    <li>✔ Limited analytics</li>
                    <li>✔ Standard templates</li>
                </ul>

                <button className="mt-6 w-full py-2 rounded-xl border border-slate-300 hover:bg-slate-50">
                    Get Started
                </button>
            </div>

            {/* Pro (HIGHLIGHTED) */}
            <div className="border-2 border-blue-500 rounded-2xl p-6 bg-white shadow-lg scale-105">
                <div className="text-xs font-semibold text-blue-600 mb-2">MOST POPULAR</div>

                <h3 className="text-xl font-semibold text-slate-900">Pro Business</h3>
                <p className="text-slate-500 mt-2">Best for growing businesses and brands</p>

                <div className="mt-6 text-3xl font-bold">$19</div>
                <p className="text-sm text-slate-500">per month</p>

                <ul className="mt-6 space-y-2 text-sm text-slate-600">
                    <li>✔ Unlimited QR codes</li>
                    <li>✔ Advanced analytics dashboard</li>
                    <li>✔ Custom branding</li>
                    <li>✔ Priority support</li>
                </ul>

                <button className="mt-6 w-full py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700">
                    Start Pro Plan
                </button>
            </div>

            {/* Business */}
            <div className="border rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-slate-900">Business</h3>
                <p className="text-slate-500 mt-2">For teams and scaling companies</p>

                <div className="mt-6 text-3xl font-bold">$49</div>
                <p className="text-sm text-slate-500">per month</p>

                <ul className="mt-6 space-y-2 text-sm text-slate-600">
                    <li>✔ Everything in Pro</li>
                    <li>✔ Team access & roles</li>
                    <li>✔ API access</li>
                    <li>✔ Dedicated support</li>
                </ul>

                <button className="mt-6 w-full py-2 rounded-xl border border-slate-300 hover:bg-slate-50">
                    Contact Sales
                </button>
            </div>

        </div>
    );
};

export default Pricing;
