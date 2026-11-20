"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./cta.css";

gsap.registerPlugin(ScrollTrigger);

export default function Cta() {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const ctaTl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".cta-box",
                    start: "top 82%",
                    toggleActions: "play reverse play reverse",
                },
            });

            ctaTl
                .from(".cta-box h2 .word", {
                    y: 35,
                    opacity: 0,
                    duration: 0.45,
                    stagger: 0.06,
                    ease: "power3.out",
                })
                .from(
                    ".img-bg-left",
                    {
                        x: 40,
                        opacity: 0,
                        duration: 0.6,
                        ease: "power3.out",
                    },
                    "-=0.4"
                )
                .from(
                    ".img-bg-right",
                    {
                        x: -40,
                        opacity: 0,
                        duration: 0.6,
                        ease: "power3.out",
                    },
                    "<"
                );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="cta-section">
            <div className="cta-box">
                <div className="cta-content">
                    <h2>
                        <span className="word">Your</span>{" "}
                        <span className="word">First</span>{" "}
                        <span className="word">Step</span>{" "}
                        <span className="word">To</span>{" "}
                        <span className="word">Create</span> <br />
                        <span className="green-line">
                            <span className="word">Content</span>{" "}
                            <span className="word">That</span> <br />
                            <span className="word">Values</span>{" "}
                            <span className="word">Authenticity</span>
                        </span>
                    </h2>

                    <div className="cta-line">
                        <Image
                            src="/line.png"
                            alt=""
                            width={2000}
                            height={100}
                            className="cta-line-img"
                        />
                    </div>

                    <p className="cta-desc">
                        Express yourself honestly and connect through moments <br />
                        that truly matter.
                    </p>

                    <Link
                        href="https://play.google.com/store/apps/details?id=com.moose_social&hl=id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-link"
                    >
                        <Image
                            src="/cta-gplay.png"
                            alt="Download on Google Play"
                            width={180}
                            height={54}
                            className="gplay-img gplay-desktop"
                        />
                        <Image
                            src="/cta-gplay-mobile.png"
                            alt="Download on Google Play"
                            width={180}
                            height={54}
                            className="gplay-img gplay-mobile"
                        />
                    </Link>
                </div>

                <div className="img-bg img-bg-left">
                    <Image
                        src="/cta-img1.png"
                        alt=""
                        fill
                        className="cta-decor-img"
                    />
                </div>
                <div className="img-bg img-bg-right">
                    <Image
                        src="/cta-img2.png"
                        alt=""
                        fill
                        className="cta-decor-img"
                    />
                </div>
            </div>
        </section>
    );
}
