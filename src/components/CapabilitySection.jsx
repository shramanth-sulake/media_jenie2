import React from 'react';

const CapabilitySection = () => {
    return (
        <div className="w-100 bg-white d-flex flex-column align-items-center">
            <style>{`
                @media (min-width: 992px) {
                    .custom-padding-x {
                        padding-left: 8rem !important;
                        padding-right: 8rem !important;
                    }
                }
            `}</style>
            <div className="w-100 container px-3 custom-padding-x py-4 mt-5 mb-4">
                <div className="text-center mb-5">
                    <h2 className="fw-bold text-dark mb-4" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', lineHeight: '1.25', letterSpacing: '-0.02em', color: '#2b2b2b' }}>
                        Capability: Your extended-team <br className="d-none d-md-block" /> for reliable lead-generation
                    </h2>
                    <p className="text-dark" style={{ fontSize: 'clamp(1.15rem, 4vw, 1.5rem)', color: '#333', fontWeight: '500' }}>
                        Get a dedicated lead-gen team that brings <br className="d-none d-md-block" /> 40+ skills in marketing & growth, to your brand.
                    </p>
                </div>

                <div className="row g-4 mb-5 pt-3">
                    {/* Phase 01 */}
                    <div className="col-12 col-md-4">
                        <div className="pe-md-3">
                            <h4 className="fw-bold mb-2 text-dark" style={{ fontSize: '1.5rem', color: '#333' }}>Phase 01</h4>
                            <h5 className="fw-bold mb-4 text-dark" style={{ fontSize: '1.4rem', color: '#333', lineHeight: '1.4' }}>
                                Discovery + <br />
                                Strategy & Planning
                            </h5>
                            <ul className="list-unstyled text-dark" style={{ fontSize: '1.15rem', color: '#444', fontWeight: '500', lineHeight: '1.6' }}>
                                <li className="mb-2">Item 01 goes here.</li>
                                <li className="mb-2">Item 01 goes here.</li>
                                <li className="mb-2">Item 01 goes here.</li>
                                <li className="mb-2">Item 01 goes here.</li>
                                <li className="mb-2">Item 01 goes here.</li>
                                <li className="mb-2">Item 01 goes here.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Phase 02 */}
                    <div className="col-12 col-md-4 position-relative">
                        {/* Yellow vertical line (hidden on mobile, visible on md+) */}
                        <div className="d-none d-md-block bg-warning position-absolute" style={{ width: '4px', height: '40px', left: 0, top: '4px', marginLeft: '10px' }}></div>

                        <div className="ps-md-4">
                            <h4 className="fw-bold mb-2 text-dark" style={{ fontSize: '1.5rem', color: '#333' }}>Phase 02</h4>
                            <h5 className="fw-bold mb-4 text-dark" style={{ fontSize: '1.4rem', color: '#333', lineHeight: '1.4' }}>
                                Platform Setup and <br />
                                Asset Design
                            </h5>
                            <ul className="list-unstyled text-dark" style={{ fontSize: '1.15rem', color: '#444', fontWeight: '500', lineHeight: '1.6' }}>
                                <li className="mb-2">Item 01 goes here.</li>
                                <li className="mb-2">Item 01 goes here also</li>
                                <li className="mb-2">Item 01 goes here.</li>
                                <li className="mb-2">Item 01 goes here and there</li>
                                <li className="mb-2">Item 01 goes here.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Phase 03 */}
                    <div className="col-12 col-md-4 position-relative">
                        {/* Yellow vertical line (hidden on mobile, visible on md+) */}
                        <div className="d-none d-md-block bg-warning position-absolute" style={{ width: '4px', height: '40px', left: 0, top: '4px', marginLeft: '10px' }}></div>

                        <div className="ps-md-4">
                            <h4 className="fw-bold mb-2 text-dark" style={{ fontSize: '1.5rem', color: '#333' }}>Phase 03</h4>
                            <h5 className="fw-bold mb-4 text-dark" style={{ fontSize: '1.4rem', color: '#333', lineHeight: '1.4' }}>
                                Activation & <br />
                                Management
                            </h5>
                            <ul className="list-unstyled text-dark" style={{ fontSize: '1.15rem', color: '#444', fontWeight: '500', lineHeight: '1.6' }}>
                                <li className="mb-2">Item 01 goes here and here</li>
                                <li className="mb-2">Item 01 goes here.</li>
                                <li className="mb-2">Item 01 goes here.</li>
                                <li className="mb-2">Item 01 goes here and there</li>
                                <li className="mb-2">Item 01 goes here.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center gap-3 w-100 mt-4">
                    <button className="btn rounded-pill fw-bold d-flex align-items-center justify-content-center shadow-sm px-4 py-2" style={{ backgroundColor: '#000', color: '#ffdb24', fontSize: '16px' }}>
                        Book a 30 Mins Strategy Call
                        <svg className="ms-2" style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                    <button className="btn btn-light rounded-pill fw-bold border border-secondary shadow-sm px-4 py-2" style={{ backgroundColor: '#fff', color: '#000', fontSize: '16px' }}>
                        Take a Free Audit (90 Sec)
                    </button>
                </div>

            </div>
        </div>
    );
};

export default CapabilitySection;
