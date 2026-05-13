import React, { useState } from 'react';
import Image from 'next/image';

const ProductDemo: React.FC = () => {
    const [input, setInput] = useState("https://yourwebsite.com");

    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
        input
    )}`;

    return (
        <section className="py-20">
            <div className="text-center max-w-3xl mx-auto mb-12">

                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                    Try It Live
                </h2>

                <p className="mt-4 text-slate-600">
                    Type something below and instantly see your QR code generated in real time.
                </p>

            </div>

            <div className="max-w-5xl mx-auto bg-white border rounded-2xl shadow-lg p-6 md:p-10">

                <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/* Input side */}
                    <div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-4">
                            Enter text or a URL
                        </h3>

                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Type something..."
                        />

                        <p className="mt-4 text-sm text-slate-500">
                            This updates the QR code instantly.
                        </p>
                    </div>

                    {/* QR preview */}
                    <div className="text-center">
                        <div className="text-sm text-slate-500 mb-2">
                            Live Preview
                        </div>

                        <div className="w-48 h-48 mx-auto bg-white border rounded-xl flex items-center justify-center shadow-sm">
                            <Image
                                src={qrUrl}
                                width={200}
                                height={200}
                                alt="QR preview"
                                unoptimized
                            />
                        </div>

                        <p className="mt-4 text-sm text-slate-600">
                            Changes as you type
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProductDemo;
