"use client";

import { useEffect, useRef } from "react";
import "./key.css";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Key() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const headerTl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".key-header",
                    start: "top 85%",
                    toggleActions: "play reverse play reverse",
                },
            });

            headerTl
                .from(".key-badge", {
                    y: () => Math.min(window.innerHeight, window.innerWidth) * 0.028,
                    opacity: 0,
                    duration: 0.5,
                    ease: "power3.out",
                })
                .from(
                    ".key-header h2 .word",
                    {
                        y: () => Math.min(window.innerHeight, window.innerWidth) * 0.032,
                        opacity: 0,
                        duration: 0.45,
                        stagger: 0.07,
                        ease: "power3.out",
                    },
                    "-=0.3"
                );

            const leftCardTl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".key-card-left",
                    start: "top 55%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                },
            });

            leftCardTl
                .from(
                    ".left-img-small",
                    {
                        rotation: -8,
                        duration: 0.75,
                        ease: "power3.out",
                    },
                    0
                )
                .from(
                    ".left-img-large",
                    {
                        scale: 0,
                        opacity: 0,
                        transformOrigin: "center center",
                        duration: 0.75,
                        ease: "power3.out",
                    },
                    0
                )
                .from(
                    ".floating-icon",
                    {
                        scale: 0,
                        opacity: 0,
                        left: "44%",
                        top: "48%",
                        duration: 0.75,
                        ease: "power3.out",
                    },
                    0
                );

            gsap.from([".key-card-left", ".key-card-right"], {
                y: () => Math.min(window.innerHeight, window.innerWidth) * 0.046,
                opacity: 0,
                duration: 0.7,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".key-grid",
                    start: "top 82%",
                    toggleActions: "play reverse play reverse",
                },
            });

            gsap.from(".stack-img", {
                y: () => -Math.min(window.innerHeight, window.innerWidth) * 0.023,
                opacity: 0,
                scale: 0.95,
                duration: 0.6,
                stagger: 0.18,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".key-card-right",
                    start: "top 65%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                },
            });

            gsap.from([".key-card-3", ".key-card-4"], {
                y: () => Math.min(window.innerHeight, window.innerWidth) * 0.046,
                opacity: 0,
                duration: 0.7,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".key-grid-bottom",
                    start: "top 85%",
                    toggleActions: "play reverse play reverse",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const renderWaveChars = (text: string) =>
        text.split("").map((char, index) => (
            <span
                key={index}
                className="key-wave-char"
                style={{ "--char-index": index } as React.CSSProperties}
            >
                {char === " " ? "\u00A0" : char}
            </span>
        ));

    return (
        <section id="key" ref={sectionRef} className="key-section">
            <div className="key-inner">
                <div className="key-header">
                    <div className="key-badge">
                        <Image
                            src="/crown-icon.png"
                            alt="Icon 1"
                            width={28}
                            height={28}
                        />
                        <span>Key Features</span>
                    </div>

                    <h2>
                        <span className="word">Built</span>{" "}
                        <span className="word">for</span>{" "}
                        <span className="word">Real.</span> <br />
                        <span className="green-line">
                            <span className="word">Designed</span>{" "}
                            <span className="word">for</span>{" "}
                            <span className="word">You.</span>
                        </span>
                    </h2>
                </div>

                <div className="key-grid">
                    <div className="key-card-left">
                        <div className="left-visual-wrapper">
                            <div className="left-img-large">
                                <Image
                                    src="/curv-line.png"
                                    alt="Curve Line"
                                    width={376}
                                    height={264}
                                    className="img-full-cover"
                                />
                            </div>

                            <div className="left-img-small">
                                <Image
                                    src="/layer1.png"
                                    alt="Trust Visual"
                                    width={344}
                                    height={180}
                                    className="img-full-cover"
                                />
                            </div>

                            <div className="floating-icon icon-top-left">
                                <Image
                                    src="/iconup-1.png"
                                    alt="Icon 1"
                                    fill
                                    unoptimized
                                />
                            </div>
                            <div className="floating-icon icon-top-center">
                                <Image
                                    src="/iconup-2.png"
                                    alt="Icon 2"
                                    fill
                                    unoptimized
                                />
                            </div>
                            <div className="floating-icon icon-top-right">
                                <Image
                                    src="/iconup-3.png"
                                    alt="Icon 3"
                                    fill
                                    unoptimized
                                />
                            </div>
                            <div className="floating-icon icon-bottom-left">
                                <Image
                                    src="/icondown-1.png"
                                    alt="Icon 4"
                                    fill
                                    unoptimized
                                />
                            </div>
                            <div className="floating-icon icon-bottom-center">
                                <Image
                                    src="/icondown-2.png"
                                    alt="Icon 5"
                                    fill
                                    unoptimized
                                />
                            </div>
                            <div className="floating-icon icon-bottom-right">
                                <Image
                                    src="/icondown-3.png"
                                    alt="Icon 6"
                                    fill
                                    unoptimized
                                />
                            </div>
                        </div>

                        <div className="left-card-text">
                            <h3>Trust What You See</h3>
                            <p>
                                No fake profiles, no misleading content — just real
                                people and real moments. Moose ensures everything
                                you see is authentic, so you can scroll and connect
                                without second guessing.
                            </p>
                        </div>
                    </div>

                    <div className="key-card-right">
                        <div className="right-visual-box">
                            <div className="right-card-text">
                                <h3>Be Yourself, Without Pressure</h3>
                                <p>
                                    Forget the need to be perfect. Share your life
                                    as it is — unfiltered, unedited, and real, in a
                                    space where authenticity matters more than
                                    appearance.
                                </p>
                            </div>

                            <div className="right-vertical-stack">
                                <Image
                                    src="/key-img-1.png"
                                    alt="Be Yourself 1"
                                    width={500}
                                    height={140}
                                    className="stack-img stack-img-1"
                                />
                                <Image
                                    src="/key-img-2.png"
                                    alt="Be Yourself 2"
                                    width={500}
                                    height={140}
                                    className="stack-img stack-img-2"
                                />
                                <Image
                                    src="/key-img-3.png"
                                    alt="Be Yourself 3"
                                    width={500}
                                    height={140}
                                    className="stack-img stack-img-3"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="key-grid-bottom">
                    <div className="key-card-3">
                        <div className="card-3-text">
                            <h3>Connect for Real</h3>
                            <p>
                                Go beyond likes and curated personas. Connect with
                                real people and build genuine relationships based
                                on trust, not illusion.
                            </p>
                        </div>

                        <div className="card-3-visual">
                            <div className="card-3-img-back">
                                <Image
                                    src="/music-up.png"
                                    alt="Back"
                                    width={320}
                                    height={210}
                                    className="img-natural"
                                />
                            </div>
                            <div className="card-3-img-front">
                                <Image
                                    src="/music.png"
                                    alt="Front"
                                    width={260}
                                    height={170}
                                    className="img-natural"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="key-card-4">
                        <div className="card-4-visual">
                            <div className="card-4-img">
                                <Image
                                    src="/moose_logo.png"
                                    alt="MOOSE logo"
                                    width={190}
                                    height={190}
                                    className="img-natural"
                                />
                            </div>
                        </div>

                        <div className="card-4-bottom">
                            <h3>Get the app</h3>
                            <Link
                                href="https://play.google.com/store/apps/details?id=com.moose_social&hl=id"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="card-4-botton"
                            >
                                <span className="key-wave-box">
                                    <span className="key-wave-layer key-wave-top">
                                        {renderWaveChars("Download Now")}
                                    </span>
                                    <span
                                        className="key-wave-layer key-wave-bottom"
                                        aria-hidden="true"
                                    >
                                        {renderWaveChars("Download Now")}
                                    </span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
