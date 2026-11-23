"use client";

import { useEffect, useRef } from "react";
import "./features.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const featuresList = [
    {
        icon: "/add-icon-1.png",
        title: "Real Conversations",
        desc: "Chat instantly with real \npeople — no bots, \nno fake accounts.",
    },
    {
        icon: "/add-icon-2.png",
        title: "Safe & Always There",
        desc: "Your moments are securely stored and always within reach.",
    },
    {
        icon: "/add-icon-3.png",
        title: "Built on Trust",
        desc: "Advanced protection keeps fake profiles and content out.",
    },
    {
        icon: "/add-icon-4.png",
        title: "Verified, For Real",
        desc: "Every user is verified, so you know who you’re connecting with.",
    },
    {
        icon: "/add-icon-5.png",
        title: "Real People Nearby",
        desc: "Discover and connect with people around you, effortlessly.",
    },
];

export default function Features() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".features-title .word", {
                y: () => Math.min(window.innerHeight, window.innerWidth) * 0.032,
                opacity: 0,
                duration: 0.45,
                stagger: 0.07,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".features-title",
                    start: "top 85%",
                    toggleActions: "play reverse play reverse",
                },
            });

            gsap.from(".feature-card", {
                y: () => Math.min(window.innerHeight, window.innerWidth) * 0.032,
                opacity: 0,
                duration: 0.5,
                stagger: 0.08,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".features-grid",
                    start: "top 82%",
                    toggleActions: "play reverse play reverse",
                },
            });

            const backTextTl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".features-phone",
                    start: "top 85%",
                    end: "bottom top",
                    scrub: 1,
                },
            });

            backTextTl
                .from(
                    ".back-text-left",
                    {
                        x: () => Math.min(window.innerHeight, window.innerWidth) * 0.088,
                        ease: "none",
                    },
                    0
                )
                .from(
                    ".back-text-right",
                    {
                        x: () => -Math.min(window.innerHeight, window.innerWidth) * 0.088,
                        ease: "none",
                    },
                    0
                );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="features" ref={sectionRef} className="features-section">
            <div className="features-inner">
                <h1 className="features-title">
                    <span className="word">...and</span>{" "}
                    <span className="word">more</span>{" "}
                    <span className="word">additional</span>{" "}
                    <span className="word">features</span>
                </h1>

                <div className="features-grid">
                    {featuresList.map((item, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    fill
                                    unoptimized
                                />
                            </div>

                            <div className="feature-text">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="back-text">
                    <h1 className="back-text-left">VARIETY</h1>
                    <h1 className="back-text-right">FEATURES</h1>
                </div>

                <div className="features-phone">
                    <Image
                        src="/add-phone.png"
                        alt="MOOSE Phone"
                        fill
                        unoptimized
                    />
                </div>
            </div>
        </section>
    );
}
