"use client";

import { useState } from "react";
import { toast } from "sonner";
import Image from "next/image";

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
    <div className="relative w-full min-h-screen overflow-hidden bg-white flex flex-col lg:flex-row">
      {/* LEFT SIDE - Background Video & Character */}
      <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-screen flex items-center justify-center">
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
                backgroundColor: `rgba(255, 255, 255, ${0.08 - i * 0.01})`,
                left: `${5 + i * 15}%`,
                top: `${-30 + i * 20}%`,
                animation: `smoke ${4 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.4}s`,
                "--tx": `${Math.random() * 40 - 20}px`,
              } as React.CSSProperties}
            />
          ))}
        </div>

        {/* Character Video - Responsive sizing */}
        <div className="relative z-10 animate-pulse hover:animate-none transition-all duration-300">
          <div className="absolute -inset-4 md:-inset-8 bg-white/40 rounded-3xl blur-3xl"></div>
          <video
            className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] object-cover rounded-3xl shadow-2xl border-4 border-white/60 backdrop-blur-md"
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
      <div className="relative w-full lg:w-1/2 min-h-[50vh] lg:h-screen bg-[#F0F7F8] flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 lg:py-8">
        <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 text-center max-w-md w-full">
          {/* Header */}
          <div className="space-y-2 sm:space-y-3">
            <p className="text-xl sm:text-2xl md:text-3xl text-black drop-shadow-lg">
              HAPPY 420
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black drop-shadow-lg">
              $420LENNY
            </h1>
       
            <div className="h-1 w-16 sm:w-20 bg-black mx-auto rounded-full"></div>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed px-2">
            The "Lenny Face" emoticon ( ͡° ͜ʖ ͡°) originated on the Finnish imageboard Ylilauta before gaining popularity on 4chan.
          </p>

          {/* Contract Address Card */}
          <div className="w-full bg-white backdrop-blur-md border border-gray-200 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-4 sm:py-5 shadow-2xl hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="text-xs text-black font-semibold uppercase tracking-widest">
                📋 Contract Address
              </div>
              <code className="text-[10px] sm:text-xs md:text-sm text-black font-mono break-all bg-gray-100 p-2 sm:p-3 rounded-lg">
                {CONTRACT_ADDRESS}
              </code>
              <button
                onClick={handleCopyAddress}
                className={`w-full py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
                  copied
                    ? "bg-black text-white shadow-lg scale-105"
                    : "bg-black hover:bg-gray-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105"
                }`}
              >
                {copied ? "✓ Copied!" : "Copy Address"}
              </button>
            </div>
          </div>

          {/* Animated Lenny Face */}
          <p className="text-3xl sm:text-4xl md:text-5xl text-black drop-shadow-lg animate-bounce hover:animate-none cursor-pointer transition-all duration-300 hover:scale-125">
            ( ͡° ͜ʖ ͡°)
          </p>
        </div>

        {/* X Community Link - Bottom Right */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 z-20">
          <a
            href={X_COMMUNITY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredLink(true)}
            onMouseLeave={() => setHoveredLink(false)}
            className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-110 text-sm sm:text-base ${
              hoveredLink
                ? "bg-black text-white shadow-2xl"
                : "bg-white text-black border border-gray-200 shadow-lg hover:bg-gray-50"
            }`}
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.514l-5.106-6.694-5.833 6.694H2.562l7.746-8.86-8.14-10.653h6.675l4.872 6.442 5.612-6.442zM17.55 19.5h1.828L6.982 3.75H5.06L17.55 19.5z" />
            </svg>
            <span className="hidden sm:inline">Join Community</span>
            {/* {!hoveredLink && <span className="sm:hidden">X</span>} */}
          </a>
        </div>

        {/* Badge - Bottom Left */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 z-20">
          <div className="bg-white border border-gray-200 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-black backdrop-blur-md shadow-md flex items-center gap-2">
            <Image 
              src="/leaf.jpg" 
              alt="420 leaf" 
              width={20} 
              height={20} 
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
            <span>HAPPY 420 ( ͡° ͜ʖ ͡°)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
