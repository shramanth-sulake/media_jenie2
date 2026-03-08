import React, { useRef, useState, useEffect } from 'react';

const CaseCard = ({ bgImage, text }) => {
    return (
        <div
            className="position-relative d-flex flex-column justify-content-between p-4 overflow-hidden rounded"
            style={{
                width: '315px',
                minWidth: '315px',
                height: '412px',
                backgroundImage: `url('${bgImage}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <h3 className="fw-bold text-dark mt-2 position-relative w-100 pe-3" style={{ fontSize: '17px', lineHeight: '1.35', zIndex: 10 }}>
                {text}
            </h3>

            <div className="d-flex justify-content-start position-relative mb-2" style={{ zIndex: 10 }}>
                <button className="btn rounded-pill fw-bold shadow-sm" style={{ backgroundColor: '#000', color: '#ffdb24', fontSize: '12.5px', padding: '10px 24px' }}>
                    View case study
                </button>
            </div>
        </div>
    );
};

const cases = [
    {
        bgImage: '/images/A.png',
        text: <>Launching &amp; growing a <br /> new D2C f&amp;b brand.</>
    },
    {
        bgImage: '/images/C.png',
        text: <>Producing 100s of learning <br /> videos for a US <br /> organization.</>
    },
    {
        bgImage: '/images/B.png',
        text: <>Growing sales of a <br /> hospitality brand through <br /> CX transformation.</>
    },
    {
        bgImage: '/images/C.png',
        text: <>Producing 100s of learning <br /> videos for a US <br /> organization.</>
    },
    {
        bgImage: '/images/A.png',
        text: <>Scaling inbound leads for a <br /> SaaS startup through <br /> decision-science targeting.</>
    },
];

const CaseSection = () => {
    const scrollRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        const el = scrollRef.current;
        if (!el) return;
        const max = el.scrollWidth - el.clientWidth;
        setScrollProgress(max > 0 ? el.scrollLeft / max : 0);
    };

    const handleThumbDrag = (e) => {
        const bar = e.currentTarget.parentElement;
        const rect = bar.getBoundingClientRect();
        const el = scrollRef.current;
        if (!el) return;

        const move = (ev) => {
            const x = Math.max(0, Math.min(ev.clientX - rect.left, rect.width));
            const ratio = x / rect.width;
            el.scrollLeft = ratio * (el.scrollWidth - el.clientWidth);
        };
        const up = () => {
            window.removeEventListener('mousemove', move);
            window.removeEventListener('mouseup', up);
        };
        window.addEventListener('mousemove', move);
        window.addEventListener('mouseup', up);
    };

    useEffect(() => {
        const el = scrollRef.current;
        if (el) el.addEventListener('scroll', handleScroll, { passive: true });
        return () => { if (el) el.removeEventListener('scroll', handleScroll); };
    }, []);

    const thumbWidth = scrollRef.current
        ? Math.max(10, (scrollRef.current.clientWidth / scrollRef.current.scrollWidth) * 100)
        : 30;

    return (
        <div className="w-100 container-fluid py-4 mt-5 mb-4" style={{ paddingLeft: '8rem', paddingRight: '0' }}>
            <h2 className="fw-bold text-dark mb-5" style={{ fontSize: '2.5rem', letterSpacing: '-0.02em' }}>
                Case Studies
            </h2>

            {/* Cards Row */}
            <div
                ref={scrollRef}
                className="d-flex gap-4 pb-4 pt-2 w-100"
                style={{
                    overflowX: 'auto',
                    overflowY: 'hidden',
                    scrollSnapType: 'x mandatory',
                    scrollBehavior: 'smooth',
                    msOverflowStyle: 'none',
                    scrollbarWidth: 'none',
                }}
            >
                <style>{`.case-scroll::-webkit-scrollbar { display: none; }`}</style>

                {cases.map((c, i) => (
                    <div
                        key={i}
                        style={{
                            scrollSnapAlign: 'start',
                            flexShrink: 0,
                            paddingRight: i === cases.length - 1 ? '8rem' : 0
                        }}
                    >
                        <CaseCard bgImage={c.bgImage} text={c.text} />
                    </div>
                ))}
            </div>

            {/* Custom Scrollbar */}
            <div className="mt-3" style={{ paddingRight: '8rem' }}>
                {/* Track */}
                <div
                    className="position-relative rounded-pill"
                    style={{ height: '4px', backgroundColor: '#e5e7eb', cursor: 'pointer' }}
                    onClick={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const ratio = (e.clientX - rect.left) / rect.width;
                        const el = scrollRef.current;
                        if (el) el.scrollLeft = ratio * (el.scrollWidth - el.clientWidth);
                    }}
                >
                    {/* Thumb */}
                    <div
                        className="position-absolute top-0 rounded-pill"
                        onMouseDown={handleThumbDrag}
                        style={{
                            height: '4px',
                            width: `${thumbWidth}%`,
                            backgroundColor: '#111',
                            left: `${scrollProgress * (100 - thumbWidth)}%`,
                            transition: 'left 0.05s linear',
                            cursor: 'grab',
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default CaseSection;
