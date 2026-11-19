"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

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
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => setIsRemoved(true),
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
                    "+=0.6"
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
        <div
            ref={overlayRef}
            style={{
                position: "fixed",
                inset: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "#00d776",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9999,
                padding: "0 1.5rem",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                    maxWidth: "92vw",
                }}
            >
                <div ref={logoRef} style={{ opacity: 0, display: "flex", alignItems: "center" }}>
                    <Image
                        src="/moose-logo.png"
                        alt="Moose Logo"
                        width={195}
                        height={195}
                        style={{
                            height: "clamp(144px, 7.5vw, 85px)",
                            width: "auto",
                            objectFit: "contain",
                        }}
                        priority
                    />
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.45rem",
                    }}
                >
                    {letters.map((item, index) => (
                        <div
                            key={index}
                            className="loading-letter"
                            style={{ opacity: 0, display: "flex", alignItems: "center" }}
                        >
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={64}
                                height={64}
                                style={{
                                    height: "clamp(38px, 5.5vw, 62px)",
                                    width: "auto",
                                    objectFit: "contain",
                                }}
                                priority
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
