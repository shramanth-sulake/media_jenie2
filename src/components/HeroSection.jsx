import React from 'react';

const HeroSection = () => {
    return (
        <div className="min-vh-100 w-100 bg-white d-flex flex-column">
            {/* Header */}
            <header className="w-100 px-4 px-md-5 py-4 d-flex justify-content-start">
                <img
                    src="/images/logo 1.png"
                    alt="Media Jenie Logo"
                    style={{ height: '40px', objectFit: 'contain' }}
                />
            </header>

            {/* Main Content */}
            <main className="flex-grow-1 w-100 container d-flex flex-column align-items-center justify-content-center pt-4 pb-5 text-center">
                <h1 className="fw-bold text-dark mb-4" style={{ fontSize: '4rem', lineHeight: '1.15', letterSpacing: '-0.02em' }}>
                    Yes. This is the page you <br className="d-none d-md-block" />
                    searched for!
                </h1>

                <p className="mb-5" style={{ fontSize: '1.25rem', color: '#4b5563', maxWidth: '850px', lineHeight: '1.6' }}>
                    We help organizations <strong className="fw-bold text-dark">generate predictable leads</strong> through <br className="d-none d-md-block" />
                    our Proprietary <strong className="fw-bold text-dark">Decision-Science Framework</strong>
                </p>

                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center gap-3 w-100 mt-2">
                    <button className="btn rounded-pill d-flex align-items-center justify-content-center fw-bold shadow-sm" style={{ backgroundColor: '#000', color: '#ffdb24', padding: '14px 32px', fontSize: '15px' }}>
                        Book a 30 Mins Strtegy Call
                        <svg className="ms-2" style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>

                    <button className="btn btn-light rounded-pill fw-bold border border-secondary shadow-sm" style={{ padding: '14px 32px', fontSize: '15px', color: '#000', backgroundColor: '#fff' }}>
                        Take a Free Audit (90 Sec)
                    </button>
                </div>
            </main>
        </div>
    );
};

export default HeroSection;
