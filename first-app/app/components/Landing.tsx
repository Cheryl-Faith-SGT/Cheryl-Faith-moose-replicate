"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./landing.css";

gsap.registerPlugin(ScrollTrigger);

export default function Landing() {
    const sectionRef = useRef<HTMLElement>(null);
    const phoneWrapperRef = useRef<HTMLDivElement>(null); // Untuk animasi Scroll
    const phoneImgRef = useRef<HTMLImageElement>(null); // Untuk animasi Mouse (X & Y)

    useEffect(() => {
        const mm = gsap.matchMedia();

        // Tablet & Desktop (>= 768px)
        mm.add("(min-width: 768px)", () => {
            gsap.to(phoneWrapperRef.current, {
                y: () => -Math.min(window.innerHeight, window.innerWidth) * 0.21,
                ease: "none",
                scrollTrigger: {
                    trigger: phoneWrapperRef.current,
                    start: "top 18%",
                    end: "bottom top",
                    scrub: true,
                },
            });

            if (phoneImgRef.current) {
                const xTo = gsap.quickTo(phoneImgRef.current, "x", {
                    duration: 1.6,
                    ease: "power3.out",
                });
                const yTo = gsap.quickTo(phoneImgRef.current, "y", {
                    duration: 1.6,
                    ease: "power3.out",
                });

                const handleMouseMove = (e: MouseEvent) => {
                    const normX = e.clientX / window.innerWidth - 0.5;
                    const normY = e.clientY / window.innerHeight - 0.5;
                    const maxOffset =
                        Math.min(window.innerHeight, window.innerWidth) * 0.028;

                    xTo(-normX * maxOffset);
                    yTo(-normY * maxOffset);
                };

                const handleMouseLeave = () => {
                    xTo(0);
                    yTo(0);
                };

                window.addEventListener("mousemove", handleMouseMove);
                document.addEventListener("mouseleave", handleMouseLeave);

                return () => {
                    window.removeEventListener("mousemove", handleMouseMove);
                    document.removeEventListener("mouseleave", handleMouseLeave);
                };
            }
        });

        // Mobile (< 768px)
        mm.add("(max-width: 767px)", () => {
            gsap.to(phoneWrapperRef.current, {
                y: () => -Math.min(window.innerHeight, window.innerWidth) * 0.23,
                ease: "none",
                scrollTrigger: {
                    trigger: phoneWrapperRef.current,
                    start: "top 80%",
                    end: "bottom top",
                    scrub: true,
                },
            });
        });

        return () => mm.revert();
    }, []);

    const renderWaveChars = (text: string) =>
        text.split("").map((char, index) => (
            <span
                key={index}
                className="landing-wave-char"
                style={{ "--char-index": index } as React.CSSProperties}
            >
                {char === " " ? "\u00A0" : char}
            </span>
        ));

    return (
        <section id="home" ref={sectionRef} className="landing">
            <div className="landing-inner">
                <div className="landing-content">
                    <div className="landing-left">
                        <h1>
                            Start sharing <br />
                            real moments <br />
                            <span className="landing-subtitle">
                                <span className="landing-line" />
                                With Moose
                            </span>
                        </h1>

                        <Link
                            href="https://play.google.com/store/apps/details?id=com.moose_social&hl=id"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="landing-cta"
                        >
                            <span className="landing-wave-box">
                                <span className="landing-wave-layer landing-wave-top">
                                    {renderWaveChars("Download Now")}
                                </span>
                                <span
                                    className="landing-wave-layer landing-wave-bottom"
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

                        <div className="mobile-small-img">
                            <Image
                                src="/mobile-moose.png"
                                alt="Moose Feature Preview"
                                width={70}
                                height={70}
                            />
                        </div>
                    </div>

                    <div className="landing-right">
                        <p className="desktop-only-text">
                            Discover the <br />
                            Social Media App That <br />
                            Values Authenticity
                        </p>

                        <p className="mobile-only-text">
                            Discover the Social Media App <br />
                            That Values Authenticity
                        </p>
                    </div>
                </div>

                <div className="landing-phone">
                    <div ref={phoneWrapperRef}>
                        <Image
                            ref={phoneImgRef}
                            src="/moose-phone.png"
                            alt="Moose Phone App"
                            width={800}
                            height={800}
                            priority
                        />
                    </div>
                </div>

                <div className="social-box">
                    <div className="marquee-wrapper">
                        <div className="marquee-track">
                            <h3>MOOSE SOCIAL MEDIA •&nbsp;</h3>
                            <h3>MOOSE SOCIAL MEDIA •&nbsp;</h3>
                        </div>
                    </div>

                    <div className="social-line">
                        <Image
                            src="/line.png"
                            alt="-"
                            width={2000}
                            height={100}
                        />
                    </div>

                    <p className="social-desc desktop-only-text">
                        Connect with Real People and Share Genuine <br />
                        Moments Without Filters or Editing Tools.
                    </p>

                    <p className="social-desc mobile-only-text">
                        Connect with Real People <br />
                        and Share Genuine Moments <br />
                        Without Filters or Editing <br />
                        Tools.
                    </p>

                    <p className="social-tags">
                        <span>Real</span>
                        <span>Unfiltered</span>
                        <span>Proven</span>
                        <span>Genuine</span>
                        <span>Authentic</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
