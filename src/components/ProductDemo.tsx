import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const ProductDemo: React.FC = () => {
    const [input, setInput] = useState("https://yourwebsite.com");
    const [qrUrl, setQrUrl] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const timeout = setTimeout(() => {
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
                input
            )}`;

            setQrUrl(url);
            setLoading(false);
        }, 250); // smooth debounce feel

        return () => clearTimeout(timeout);
    }, [input]);

    return (
        <section className="py-24">
            <div className="text-center max-w-3xl mx-auto mb-14">
                
                <div className="inline-flex items-center px-4 py-1 rounded-full border bg-white text-slate-600 text-sm shadow-sm mb-5">
                    ⚡ Live Product Preview
                </div>

                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
                    Generate QR Codes in Real Time
                </h2>

                <p className="mt-5 text-lg text-slate-600">
                    Type anything below and watch your QR code appear instantly with a smooth, modern experience.
                </p>
            </div>

            <div className="max-w-5xl mx-auto bg-white border rounded-3xl shadow-xl p-8 md:p-12 transition-all duration-300 hover:shadow-2xl">

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* INPUT SIDE */}
                    <div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-5">
                            Enter your content
                        </h3>

                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="w-full p-4 border rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                            placeholder="https://example.com"
                        />

                        <p className="mt-4 text-sm text-slate-500">
                            Supports links, text, product pages, and more.
                        </p>

                        {/* mini pulse indicator */}
                        <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                            </span>
                            Live updating preview
                        </div>
                    </div>

                    {/* QR SIDE */}
                    <div className="text-center">

                        <div className="text-sm text-slate-500 mb-3">
                            Preview Output
                        </div>

                        <div className="relative w-56 h-56 mx-auto flex items-center justify-center bg-slate-50 border rounded-2xl shadow-inner overflow-hidden">

                            {loading && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-6 h-6 border-2 border-slate-300 border-t-blue-600 rounded-full animate-spin"></div>
                                </div>
                            )}

                            {qrUrl && (
                                <Image
                                    src={qrUrl}
                                    width={220}
                                    height={220}
                                    alt="QR preview"
                                    unoptimized
                                    className={`transition-all duration-300 ${
                                        loading ? "opacity-0 scale-95" : "opacity-100 scale-100"
                                    }`}
                                />
                            )}
                        </div>

                        <p className="mt-4 text-sm text-slate-600">
                            Instantly generated, optimized for scanning
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProductDemo;
