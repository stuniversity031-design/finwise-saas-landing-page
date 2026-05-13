import React from 'react';

const Stats = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center py-10">

            <div>
                <p className="text-3xl font-bold text-slate-900">10K+</p>
                <p className="text-sm text-slate-500 mt-1">QR Codes Generated</p>
            </div>

            <div>
                <p className="text-3xl font-bold text-slate-900">2.5K+</p>
                <p className="text-sm text-slate-500 mt-1">Active Businesses</p>
            </div>

            <div>
                <p className="text-3xl font-bold text-slate-900">99.9%</p>
                <p className="text-sm text-slate-500 mt-1">Uptime Reliability</p>
            </div>

            <div>
                <p className="text-3xl font-bold text-slate-900">24/7</p>
                <p className="text-sm text-slate-500 mt-1">Support Availability</p>
            </div>

        </div>
    );
};

export default Stats;
