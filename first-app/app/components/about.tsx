"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./about.css";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                },
            });

            tl.from(".bubble", {
                scale: 0,
                opacity: 0,
                duration: 0.55,
                stagger: 0.08,
                ease: "back.out(1.7)",
            }).from(
                ".about-anim-text",
                {
                    y: 40,
                    opacity: 0,
                    duration: 0.55,
                    stagger: 0.1,
                    ease: "power2.out",
                },
                "-=0.35"
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const renderWaveChars = (text: string) =>
        text.split("").map((char, index) => (
            <span
                key={index}
                className="about-wave-char"
                style={{ "--char-index": index } as React.CSSProperties}
            >
                {char === " " ? "\u00A0" : char}
            </span>
        ));

    return (
        <section id="about" ref={sectionRef} className="about-section">
            <div className="bubble bubble-1">
                <Image
                    src="/ab1.png"
                    alt="Icon 1"
                    width={82}
                    height={82}
                />
            </div>

            <div className="bubble bubble-2">
                <Image
                    src="/ab2.png"
                    alt="Icon 2"
                    width={82}
                    height={82}
                />
            </div>

            <div className="bubble bubble-3">
                <Image
                    src="/ab3.png"
                    alt="Icon 3"
                    width={82}
                    height={82}
                />
            </div>

            <div className="bubble bubble-4">
                <Image
                    src="/ab4.png"
                    alt="Icon 4"
                    width={82}
                    height={82}
                />
            </div>

            <div className="about-center">
                <h1 className="about-title about-anim-text">
                    The all-in-one social <br />
                    platform built on <br />
                    authenticity.
                </h1>

                <div className="about-tagline about-anim-text">
                    <div className="gl-1"></div>
                    <p>Feel at ease with a social space you can trust.</p>
                    <div className="gl-2"></div>
                </div>

                <div className="about-cta-wrapper about-anim-text">
                    <Link
                        href="https://play.google.com/store/apps/details?id=com.moose_social&hl=id"
                        className="about-cta"
                    >
                        <span className="about-wave-box">
                            <span className="about-wave-layer about-wave-top">
                                {renderWaveChars("Download Now")}
                            </span>
                            <span
                                className="about-wave-layer about-wave-bottom"
                                aria-hidden="true"
                            >
                                {renderWaveChars("Download Now")}
                            </span>
                        </span>

                        <span className="cta-icon">
                            <Image
                                src="/arrow-icon.png"
                                alt="Download Arrow"
                                width={18}
                                height={18}
                            />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
