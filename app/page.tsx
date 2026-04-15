"use client";

import { useState } from "react";
import { toast } from "sonner";

const CONTRACT_ADDRESS = "0x1234567890123456789012345678901234567890";
const X_COMMUNITY_LINK = "https://x.com";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
      toast.success("Contract address copied!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy address");
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white flex">
      {/* LEFT SIDE - Background Video & Character */}
      <div className="relative w-1/2 h-full flex items-center justify-center">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/bg-image.mp4" type="video/mp4" />
        </video>

        {/* Smoke Animation on Left */}
        <div className="absolute inset-0 w-full h-full">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full blur-3xl"
              style={{
                width: `${100 + i * 50}px`,
                height: `${100 + i * 50}px`,
                backgroundColor: `rgba(200, 200, 200, ${0.08 - i * 0.01})`,
                left: `${5 + i * 15}%`,
                top: `${-30 + i * 20}%`,
                animation: `smoke ${4 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.4}s`,
                "--tx": `${Math.random() * 40 - 20}px`,
              } as React.CSSProperties}
            />
          ))}
        </div>

        {/* Character Video - Much Bigger */}
        <div className="relative z-10 animate-pulse hover:animate-none transition-all duration-300">
          <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-pink-500/40 rounded-3xl blur-3xl"></div>
          <video
            className="relative w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] object-cover rounded-3xl shadow-2xl border-4 border-white/60 backdrop-blur-md"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/character.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* RIGHT SIDE - Content */}
      <div className="w-1/2 h-full bg-gradient-to-br from-white/40 via-white/40 to-white/40 flex flex-col items-center justify-center px-8 md:px-12 py-8">
        <div className="flex flex-col items-center gap-8 text-center max-w-md">
          {/* Header */}
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-bold text-black drop-shadow-lg">
              Launch
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-500 leading-relaxed">
            Join our exclusive community and be part of something extraordinary
          </p>

          {/* Contract Address Card */}
          <div className="w-full bg-white/30 backdrop-blur-md border border-white/30 rounded-2xl px-6 py-5 shadow-2xl hover:shadow-xl transition-all duration-300 hover:bg-white/15">
            <div className="flex flex-col gap-4">
              <div className="text-xs text-gray-400 font-semibold uppercase tracking-widest">
                📋 Contract Address
              </div>
              <code className="text-xs md:text-sm text-white font-mono break-all bg-black/40 p-3 rounded-lg">
                {CONTRACT_ADDRESS}
              </code>
              <button
                onClick={handleCopyAddress}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 text-base ${
                  copied
                    ? "bg-green-500 text-white shadow-lg scale-105"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105"
                }}`}
              >
                {copied ? "✓ Copied!" : "Copy Address"}
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="w-full grid grid-cols-3 gap-4">
            <div className="bg-white/30 border border-white/20 rounded-lg p-3 text-center hover:bg-white/10 transition-all">
              <div className="text-2xl font-bold text-blue-400">100K+</div>
              <div className="text-xs text-gray-400 mt-1">Members</div>
            </div>
            <div className="bg-white/5 border border-white/20 rounded-lg p-3 text-center hover:bg-white/10 transition-all">
              <div className="text-2xl font-bold text-purple-400">$50M+</div>
              <div className="text-xs text-gray-400 mt-1">Volume</div>
            </div>
            <div className="bg-white/5 border border-white/20 rounded-lg p-3 text-center hover:bg-white/10 transition-all">
              <div className="text-2xl font-bold text-pink-400">24/7</div>
              <div className="text-xs text-gray-400 mt-1">Support</div>
            </div>
          </div>
        </div>

        {/* X Community Link - Bottom Right */}
        <div className="absolute bottom-8 right-8 z-20">
          <a
            href={X_COMMUNITY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredLink(true)}
            onMouseLeave={() => setHoveredLink(false)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-110 ${
              hoveredLink
                ? "bg-white text-black shadow-2xl"
                : "bg-white/80 text-gray-900 shadow-lg hover:bg-white/95"
            }}`}
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.514l-5.106-6.694-5.833 6.694H2.562l7.746-8.86-8.14-10.653h6.675l4.872 6.442 5.612-6.442zM17.55 19.5h1.828L6.982 3.75H5.06L17.55 19.5z" />
            </svg>
            <span className="hidden sm:inline">Join Community</span>
            {!hoveredLink && <span className="sm:hidden">X</span>}
          </a>
        </div>

        {/* Badge - Bottom Left */}
        <div className="absolute bottom-8 left-8 z-20">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/50 rounded-full px-4 py-2 text-sm font-semibold text-blue-300 backdrop-blur-md">
            ✨ Limited Edition Launch
          </div>
        </div>
      </div>
    </div>
  );
}
