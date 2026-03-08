import React from 'react';

const OfferSection = () => {
    return (
        <div className="w-100 bg-white d-flex flex-column pb-5">
            <style>{`
                @media (min-width: 992px) {
                    .custom-padding-x {
                        padding-left: 8rem !important;
                        padding-right: 8rem !important;
                    }
                }
            `}</style>

            {/* --- SECTION 1: Top Image Background & Card --- */}
            <div className="w-100 d-flex flex-column align-items-center mb-5">
                <div className="w-100 px-3 px-md-4 mt-3">
                    <div
                        className="w-100 position-relative d-flex justify-content-center"
                        style={{
                            backgroundImage: 'url("/images/image 44.png")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            minHeight: '450px',
                            height: '55vh',
                            borderRadius: '0px'

                        }}
                    >
                    </div>
                </div>

                {/* Overlapping White Card */}
                <div className="w-100 container position-relative px-3 custom-padding-x" style={{ zIndex: 20, marginTop: '-8rem' }}>
                    <div className="bg-white p-4 p-md-5 border-md-0 border shadow-sm" style={{ boxShadow: '0px 15px 60px rgba(0,0,0,0.1) !important' }}>
                        <h2 className="fw-bold text-dark mb-4" style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', lineHeight: '1.25', letterSpacing: '-0.02em' }}>
                            Problem you are facing, and we <br className="d-none d-md-block" /> understand it well here
                        </h2>
                        <div className="mb-5 text-secondary mt-4" style={{ fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '500px', marginTop: '2rem' }}>
                            <p className="mb-4">
                                Most lead-gen programs focus on channels, and activities, assuming intent-of-buying.
                                We work at "decision-science" level. We understand how your target customer take buying decision - which is spread across many touch-points and stages. We work at demand-signal-capture and demand-activation-signals, to generate quality and predictable lead pipeline for you.
                            </p>
                        </div>

                        <div className="d-flex flex-column flex-sm-row align-items-center gap-3 mt-4">
                            <button className="btn rounded-pill fw-bold d-flex align-items-center justify-content-center shadow-sm" style={{ backgroundColor: '#000', color: '#ffdb24', padding: '14px 32px', fontSize: '15px' }}>
                                Book a 30 Mins Strategy Call
                                <svg className="ms-2" style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </button>
                            <button className="btn btn-light rounded-pill fw-bold border border-secondary shadow-sm" style={{ backgroundColor: '#fff', color: '#000', padding: '14px 32px', fontSize: '15px' }}>
                                Take a Free Audit (90 Sec)
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- SECTION 2: Yellow Audit Banner --- */}
            <div className="w-100 container px-3 custom-padding-x py-4 mt-5 mb-4">
                <div className="row g-0 align-items-center rounded-4 position-relative overflow-hidden shadow-sm" style={{ backgroundColor: '#fde047' }}>

                    {/* Content Left */}
                    <div className="col-12 col-md-8 p-4 p-md-5 position-relative" style={{ zIndex: 2 }}>
                        <h2 className="fw-bold text-dark mb-4" style={{ fontSize: 'clamp(1.8rem, 5vw, 2.4rem)', lineHeight: '1.25', letterSpacing: '-0.02em', color: '#1f2937' }}>
                            How we solve the problem and<br />
                            what is our solution?
                        </h2>

                        <div className="text-dark mb-5" style={{ fontSize: '1.25rem', lineHeight: '1.6', color: '#374151' }}>
                            <p className="mb-2 pe-md-5">Take this quick audit and<br className="d-none d-sm-block" /> we'll show you.</p>
                            <ul className="mb-0 ps-3" style={{ listStyleType: 'disc' }}>
                                <li className="mb-2">It's completely free</li>
                                <li className="mb-2">Only takes about 90 seconds</li>
                                <li className="mb-0">Get a tailored action report</li>
                            </ul>
                        </div>

                        <button className="btn rounded-pill fw-bold d-flex align-items-center justify-content-center shadow-sm" style={{ backgroundColor: '#000', color: '#fde047', padding: '14px 32px', fontSize: '15px', width: 'fit-content' }}>
                            Book a 30 mins Strategy Call
                            <svg className="ms-2" style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>

                    {/* Image Right */}
                    <div className="col-12 col-md-4 d-flex justify-content-end align-items-end position-absolute h-100 end-0 bottom-0 d-none d-md-flex pointer-events-none" style={{ pointerEvents: 'none' }}>
                        <img
                            src="/images/img.png"
                            alt="Audit Magnifying Glass"
                            className="img-fluid"
                            style={{
                                maxWidth: '140%',
                                objectFit: 'contain',
                                objectPosition: 'bottom right',
                                position: 'absolute',
                                bottom: 0,
                                right: '-5%',
                                maxHeight: '110%'
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* --- SECTION 3: Our Approach/ framework --- */}
            <div className="w-100 container px-3 custom-padding-x py-4 mt-5 mb-4">
                <h3 className="fw-bold text-dark mb-4" style={{ fontSize: '1.75rem' }}>Our Approach/ framework</h3>

                <div className="position-relative overflow-hidden rounded-3" style={{ backgroundColor: '#f0f0f0', minHeight: '400px' }}>
                    <div className="row g-0 align-items-end h-100">

                        {/* Left Content */}
                        <div className="col-12 col-md-7 p-4 p-md-5" style={{ zIndex: 2, position: 'relative' }}>
                            <p className="fw-semibold text-dark mb-4" style={{ fontSize: '1.4rem', lineHeight: '1.5' }}>
                                Take this quick audit and<br />we'll show you.
                            </p>
                            <ul className="mb-5" style={{ listStyleType: 'disc', paddingLeft: '1.2rem', fontSize: '1.1rem', color: '#1f2937', lineHeight: '2' }}>
                                <li>It's completely free</li>
                                <li>Only takes about 90 seconds</li>
                                <li>Get a tailored action report</li>
                            </ul>

                            <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-3 mt-2">
                                <button className="btn rounded-pill fw-bold d-flex align-items-center justify-content-center shadow-sm" style={{ backgroundColor: '#000', color: '#ffdb24', padding: '14px 28px', fontSize: '14px', width: 'fit-content' }}>
                                    Book a 30 Mins Strtegy Call
                                    <svg className="ms-2" style={{ width: '14px', height: '14px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                                <button className="btn btn-light rounded-pill fw-bold border border-secondary shadow-sm" style={{ backgroundColor: '#fff', color: '#000', padding: '14px 28px', fontSize: '14px' }}>
                                    Take a Free Audit (90 Sec)
                                </button>
                            </div>
                        </div>

                        {/* Right — Magnifying Glass Image */}
                        <div className="col-12 col-md-5 d-none d-md-flex justify-content-end align-items-end position-absolute h-100 end-0 bottom-0" style={{ pointerEvents: 'none' }}>
                            <img
                                src="/images/img.png"
                                alt="Approach Magnifying Glass"
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    right: '-2%',
                                    maxHeight: '105%',
                                    maxWidth: '50%',
                                    objectFit: 'contain',
                                    objectPosition: 'bottom right'
                                }}
                            />
                        </div>

                    </div>
                </div>
            </div>

            {/* --- SECTION 4: Our Process Flowchart --- */}
            <div className="w-100 container px-3 custom-padding-x py-4 mt-5 mb-4">
                <h3 className="fw-bold text-dark mb-4" style={{ fontSize: '1.75rem' }}>Our Process</h3>
                <img
                    src="/images/MediaJenie-Website-Dev-Process-Full 1.png"
                    alt="Process Flowchart"
                    className="w-100 h-auto d-block mx-auto border"
                    style={{ objectFit: 'contain' }}
                />
            </div>

        </div>
    );
};

export default OfferSection;
