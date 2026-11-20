"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./loading.css";

const letters = [
    { src: "/M-let.png", alt: "M" },
    { src: "/O-let.png", alt: "O" },
    { src: "/O-let.png", alt: "O" },
    { src: "/S-let.png", alt: "S" },
    { src: "/E-let.png", alt: "E" },
];

export default function Loading() {
    const [isRemoved, setIsRemoved] = useState(false);
    const overlayRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!overlayRef.current || !logoRef.current) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => {
                    setIsRemoved(true);
                },
            });

            tl.fromTo(
                logoRef.current,
                { opacity: 0, x: -30 },
                { opacity: 1, x: 0, duration: 0.5, ease: "power3.out" }
            )
                .fromTo(
                    ".loading-letter",
                    { opacity: 0, x: -22 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.35,
                        stagger: 0.08,
                        ease: "power3.out",
                    },
                    "+=0.4"
                )
                .to(
                    overlayRef.current,
                    {
                        xPercent: 100,
                        duration: 0.85,
                        ease: "power3.inOut",
                    },
                    "+=0.45"
                );
        }, overlayRef);

        return () => ctx.revert();
    }, []);

    if (isRemoved) return null;

    return (
        <div ref={overlayRef} className="loading-overlay">
            <div className="loading-content">
                <div ref={logoRef} className="loading-logo-wrapper">
                    <img
                        src="/moose-logo.png"
                        alt="Moose Logo"
                        className="loading-logo-img"
                    />
                </div>

                <div className="loading-letters">
                    {letters.map((item, index) => (
                        <div key={index} className="loading-letter">
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="loading-letter-img"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
