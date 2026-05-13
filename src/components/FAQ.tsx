import React from 'react';

const FAQ = () => {
    return (
        <div className="space-y-6 mt-10">

            <div>
                <h3 className="font-semibold text-slate-900">What is this platform?</h3>
                <p className="text-slate-600 mt-1">
                    A digital tool that helps you create QR codes and simple business tools that drive real customer engagement.
                </p>
            </div>

            <div>
                <h3 className="font-semibold text-slate-900">Do I need technical skills?</h3>
                <p className="text-slate-600 mt-1">
                    No. Everything is built to be simple, fast, and beginner-friendly.
                </p>
            </div>

            <div>
                <h3 className="font-semibold text-slate-900">Can I upgrade later?</h3>
                <p className="text-slate-600 mt-1">
                    Yes. You can start free and scale as your business grows.
                </p>
            </div>

        </div>
    );
};

export default FAQ;
