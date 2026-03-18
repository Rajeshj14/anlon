'use client'

import React, { useState, useRef, useEffect } from 'react';
import BookingFormModal from './contact-form';
import RevealOnScroll from './RevealOnScroll'; // ✅ reusable animation component

const WhoWeAreSection = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const tryUnmute = () => {
      video.muted = false;
      setIsMuted(false);
    };
    video.addEventListener('playing', tryUnmute, { once: true });
    return () => video.removeEventListener('playing', tryUnmute);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };



  const trustPoints = [
    'Doctor-led scalp & hair evaluation',
    'Personalised medical planning',
    'Ethical, non-aggressive approach',
    'Follow-up and progress monitoring',
    'No over-pitch or unnecessary procedures',
  ];

  return (
    <section className="py-5 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
      <style>{`
        @keyframes floatUpDown {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes floatLeftRight {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(15px); }
        }
        .animate-float-up-down { animation: floatUpDown 4s ease-in-out infinite; }
        .animate-float-left-right { animation: floatLeftRight 5s ease-in-out infinite; }
      `}</style>

      <div className="max-w-7xl mx-auto">

        {/* ── Mobile Layout ── */}
        <div className="block lg:hidden">

          {/* Heading - from left */}
          <RevealOnScroll direction="left" duration={700}>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight max-sm:mb-10 mb-4">
              Trusted Hair Loss Clinic in Chennai — Medical, Ethical, Result-Focused
            </h2>
          </RevealOnScroll>

          {/* Images - from right */}
          <RevealOnScroll direction="right" delay={150} duration={800}>
            <div className="relative h-[350px] sm:h-[400px] w-full mb-6">
              <div className="absolute top-0 right-0 w-[85%] h-[75%] rounded-2xl overflow-hidden shadow-2xl z-10 animate-float-up-down">
                <img src="https://ik.imagekit.io/yvjqesbbx/public/DSC02295.JPG?updatedAt=1773305816255" alt="Doctor with baby" className="w-full h-full object-cover" />
              </div>
              <div
                className="absolute bottom-0 left-0 rounded-2xl overflow-hidden shadow-2xl z-20 animate-float-left-right bg-orange-50"
                style={{ width: '60%', height: '45%', maxHeight: '250px', padding: '6px' }}
              >
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <img src="https://ik.imagekit.io/yvjqesbbx/public/DSC02268.JPG?updatedAt=1773305811543" alt="Nurse with elderly patient" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute top-[8%] right-[4%] w-[70%] h-[60%] rounded-2xl border-4 -z-10" style={{ borderColor: '#130e0b', opacity: 0.2 }} />
            </div>
          </RevealOnScroll>

          {/* Description - from left */}
          <RevealOnScroll direction="left" delay={200} duration={700}>
            <div className="space-y-4 mb-4">
              <p className="text-gray-600 text-base leading-relaxed">
                At Anlon Aesthetics, hair treatments are approached medically, not commercially. Every patient is first evaluated for hair loss pattern, scalp condition, and follicle activity before any recommendation is made.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                Our focus is on clarity, safety, and long-term outcomes, ensuring that the treatment chosen truly matches your hair loss stage.
              </p>
            </div>
          </RevealOnScroll>

          {/* Trust Highlights - from right */}
          <RevealOnScroll direction="right" delay={250} duration={700}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-orange-50 p-4 rounded-xl border-l-4 mb-6" style={{ borderColor: '#130e0b' }}>
              {trustPoints.map((point, i) => (
                <div key={i} className={`flex items-start gap-2 ${i === 4 ? 'sm:col-span-2' : ''}`}>
                  <span className="text-lg mt-1 flex-shrink-0" style={{ color: '#130e0b' }}>✔</span>
                  <p className="text-gray-800 text-sm font-medium">{point}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          {/* CTA - from left */}
          <RevealOnScroll direction="left" delay={300} duration={700}>
<div className="flex sm:flex-row gap-3">
  <button
    className="group border-1 border-black flex items-center justify-center gap-2 text-black font-bold px-6 py-3 rounded-full w-full transition-all duration-300 hover:brightness-110 shadow-lg hover:shadow-xl text-sm sm:w-auto"
    onClick={() => setIsBookingModalOpen(true)}
  >
    Book Now
  </button>
  
  <a 
    href="tel:+91 9500653243" 
    className="flex w-full sm:w-auto"
  >
    <button
      className="btn-cta w-full flex justify-center"
      style={{ backgroundColor: '#9B7057' }}
    >
      Call Now
    </button>
  </a>
</div>
          </RevealOnScroll>
        </div>

        {/* ── Desktop Layout (lg+) ── */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">

          {/* Left - Text slides from left */}
          <RevealOnScroll direction="left" duration={800}>
            <div className="space-y-2">
              <h2 className="text-5xl font-bold text-gray-900">
                Trusted Hair Loss Clinic in Chennai — Medical, Ethical, Result-Focused
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 text-lg leading-relaxed">
                  At Anlon Aesthetics, hair treatments are approached medically, not commercially. Every patient is first evaluated for hair loss pattern, scalp condition, and follicle activity before any recommendation is made.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our focus is on clarity, safety, and long-term outcomes, ensuring that the treatment chosen truly matches your hair loss stage.
                </p>
              </div>

              {/* Trust Highlights */}
              <div className="grid grid-cols-2 gap-4 bg-orange-50 p-6 rounded-xl border-l-4" style={{ borderColor: '#130e0b' }}>
                {trustPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-xl mt-1" style={{ color: '#130e0b' }}>✔</span>
                    <p className="text-gray-800 font-medium">{point}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-4 pt-4">
                  <button
    className="group border-1 border-black flex items-center justify-center gap-2 text-black font-bold px-6 py-3 rounded-lg transition-all duration-300 hover:brightness-110 shadow-lg hover:shadow-xl text-sm w-full sm:w-auto"
    onClick={() => setIsBookingModalOpen(true)}
  >
    Book Now
  </button>
  
  <a 
    href="tel:+91 9500653243" 
    className="flex w-full sm:w-auto sm:hidden"
  >
    <button
      className="group flex items-center justify-center gap-2 text-white font-bold px-6 py-3 rounded-lg transition-all duration-300 hover:brightness-110 shadow-lg hover:shadow-xl text-sm w-full"
      style={{ backgroundColor: '#9B7057' }}
    >
      Call Now
    </button>
  </a>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right - Images slide from right */}
          <RevealOnScroll direction="right" delay={200} duration={800}>
            <div className="relative h-[700px]">
              <div className="absolute top-0 right-0 w-[85%] h-[90%] rounded-3xl overflow-hidden shadow-2xl z-10 animate-float-up-down">
                <video
                  ref={videoRef}
                  src="/script-10.mov"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={toggleMute}
                  className="absolute bottom-3 right-3 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white hover:bg-black/70 transition-all"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                    </svg>
                  )}
                </button>
              </div>
              {/* <div
                className="absolute bottom-0 left-0 rounded-3xl overflow-hidden shadow-2xl z-20 animate-float-left-right bg-orange-50"
                style={{ width: '60%', height: '55%', padding: '8px' }}
              >
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <img src="https://ik.imagekit.io/yvjqesbbx/public/C6274T01.jpeg?updatedAt=1773305802807" alt="Nurse with elderly patient" className="w-full h-full object-cover" />
                </div>
              </div> */}
              <div className="absolute top-[10%] right-[5%] w-[70%] h-[65%] rounded-3xl border-4 -z-10" style={{ borderColor: '#130e0b', opacity: 0.2 }} />
            </div>
          </RevealOnScroll>

        </div>
      </div>

      <BookingFormModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </section>
  );
};

export default WhoWeAreSection;