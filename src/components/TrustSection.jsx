import React, { useState } from 'react';

const testimonials = [
    {
        quote: "Thanks for turning out 3 lovely videos in Kannada on Cervical cancer. Your team was very responsive to our feedback and took action in a short time. We appreciate the professionalism shown and hope to work with you again in the future.",
        name: "Kanchan Bannerjee",
        title: "Hon Secretary",
        org: "ICS",
        avatarBg: "ec4899"
    },
    {
        quote: "Working with MediaJenie was a game-changer for our B2B pipeline. Within just 60 days, we saw a 40% increase in qualified leads. Their Decision-Science Framework really does deliver on its promise — highly recommended for any growth-focused team.",
        name: "Rahul Mehta",
        title: "Head of Growth",
        org: "TechVentures Pvt Ltd",
        avatarBg: "6366f1"
    }
];

const TrustSection = () => {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
    const next = () => setCurrent((c) => (c + 1) % testimonials.length);

    const t = testimonials[current];

    return (
        <div className="w-100 bg-white py-5 d-flex flex-column align-items-center font-sans">
            <style>{`
                @media (min-width: 992px) {
                    .custom-padding-x {
                        padding-left: 8rem !important;
                        padding-right: 8rem !important;
                    }
                }
            `}</style>

            {/* 1. Fit: Our Lead-gen Service is perfect for... */}
            <div className="w-100 container px-3 custom-padding-x py-4 mt-5 mb-4">
                <div className="w-100 p-4 p-md-5" style={{ backgroundColor: '#f4f4f4', borderRadius: '4px' }}>
                    <h2 className="fw-bold text-center text-dark mb-5" style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', lineHeight: '1.3' }}>
                        Fit: Our Lead-gen <br className="d-none d-sm-block" />
                        Service is perfect for...
                    </h2>

                    <div className="row g-0 pt-2 position-relative">
                        {/* Vertical line divider for center */}
                        <div className="d-none w-100 d-md-flex justify-content-center position-absolute" style={{ height: '100%', top: 0, left: 0, pointerEvents: 'none' }}>
                            <div style={{ width: '1px', backgroundColor: '#d1d1d1', height: '100%' }}></div>
                        </div>

                        {/* Left column */}
                        <div className="col-12 col-md-6 pe-md-5">
                            <h4 className="fw-bold text-dark mb-3" style={{ fontSize: '1.5rem' }}>
                                Small &amp; Medium <br /> Organizations
                            </h4>
                            <p className="text-dark mb-0 fw-medium" style={{ fontSize: '1.15rem', color: '#444' }}>
                                B2B or B2C businesses can use our lead-<br className="d-none d-xl-block" />
                                gen services.
                            </p>
                        </div>

                        {/* Right column */}
                        <div className="col-12 col-md-6 ps-md-5 mt-4 mt-md-0">
                            <h4 className="fw-bold text-dark mb-3" style={{ fontSize: '1.5rem' }}>
                                B2B / B2C Products &amp; Services
                            </h4>
                            <p className="text-dark mb-0 fw-medium" style={{ fontSize: '1.15rem', color: '#444' }}>
                                B2B or B2C businesses can use our lead-<br className="d-none d-xl-block" />
                                gen services.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Header */}
            <div className="container px-4 text-center text-md-start mb-4" style={{ maxWidth: '1000px' }}>
                <h2 className="fw-bold text-dark" style={{ fontSize: '2rem', color: '#2b2b2b' }}>
                    Trust: Highly Rated
                </h2>
            </div>

            {/* Logo Strip — Infinite Scrolling Ticker */}
            <div className="w-100 border-top border-bottom py-4 mb-5" style={{ borderColor: '#eef0f2', overflow: 'hidden' }}>
                <style>{`
                    @keyframes logoScroll {
                        0%   { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .logo-ticker {
                        display: flex;
                        width: max-content;
                        animation: logoScroll 18s linear infinite;
                    }
                    .logo-ticker:hover {
                        animation-play-state: paused;
                    }
                    .logo-ticker img {
                        height: 48px;
                        object-fit: contain;
                        flex-shrink: 0;
                    }
                `}</style>
                <div className="logo-ticker">
                    <img src="/images/Group 1.png" alt="Client Logos" />
                    <img src="/images/Group 1.png" alt="Client Logos duplicate" aria-hidden="true" />
                </div>
            </div>

            {/* Clients Speak — Carousel */}
            <div className="container px-4" style={{ maxWidth: '1000px' }}>
                <div className="mb-5 pb-5">
                    <h3 className="fw-bold mb-4" style={{ fontSize: '1.4rem', color: '#6c757d' }}>Clients Speak</h3>

                    <div
                        className="row g-4 align-items-center mt-3"
                        key={current}
                        style={{ animation: 'fadeIn 0.35s ease' }}
                    >
                        <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateX(12px); } to { opacity: 1; transform: translateX(0); } }`}</style>

                        {/* Quote + Navigation */}
                        <div className="col-12 col-md-7 pe-md-5">
                            <p className="fw-medium mb-4" style={{ fontSize: '1.05rem', color: '#444', lineHeight: '1.6' }}>
                                &ldquo;{t.quote}&rdquo;
                            </p>

                            <div className="d-flex align-items-center gap-3 mt-4">
                                <span className="text-secondary" style={{ fontSize: '0.85rem', minWidth: '40px' }}>
                                    {current + 1} / {testimonials.length}
                                </span>

                                <button
                                    id="testimonial-prev"
                                    onClick={prev}
                                    className="btn btn-link p-0 text-dark"
                                    style={{ opacity: current === 0 ? 0.35 : 1, transition: 'opacity 0.2s' }}
                                    aria-label="Previous testimonial"
                                >
                                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                                    </svg>
                                </button>

                                <button
                                    id="testimonial-next"
                                    onClick={next}
                                    className="btn btn-link p-0 text-dark"
                                    style={{ opacity: current === testimonials.length - 1 ? 0.35 : 1, transition: 'opacity 0.2s' }}
                                    aria-label="Next testimonial"
                                >
                                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Speaker Info */}
                        <div className="col-12 col-md-5 position-relative ps-md-5">
                            <div className="d-none d-md-block position-absolute bg-light h-100" style={{ width: '2px', left: 0, top: 0 }}></div>
                            <div className="d-flex align-items-center gap-3">
                                <img
                                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=${t.avatarBg}&color=fff&rounded=true`}
                                    alt={t.name}
                                    className="rounded-circle"
                                    style={{ width: '64px', height: '64px', objectFit: 'cover', flexShrink: 0 }}
                                />
                                <div>
                                    <h5 className="fw-bold mb-1 text-dark" style={{ fontSize: '1rem' }}>{t.name}</h5>
                                    <p className="text-secondary mb-0 fst-italic" style={{ fontSize: '0.85rem', lineHeight: '1.3' }}>
                                        {t.title}<br />
                                        <span style={{ fontStyle: 'normal' }}>{t.org}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TrustSection;
