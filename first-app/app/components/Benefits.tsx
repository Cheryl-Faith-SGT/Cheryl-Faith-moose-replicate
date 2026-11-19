"use client";

import { useEffect, useRef } from "react";
import "./benefits.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const benefitsList = [
    {
        img: "/card-1.png",
        title: "Feel at Ease, Every Time You Scroll",
        desc: "Enjoy a social experience where everything feels more certain and trustworthy. Moose removes the doubt, so you can focus on what matters.",
        point1: "No fake profiles or misleading content",
        point2: "A space you can explore without second guessing",
    },
    {
        img: "/card-2.png",
        title: "Be Yourself, Without the Pressure",
        desc: "Share your life as it is, without the need to edit, impress, or keep up with unrealistic standards. Moose gives you the freedom to just be you.",
        point1: "No pressure to look perfect or curated",
        point2: "Authentic moments matter more than aesthetics",
    },
    {
        img: "/card-3.png",
        title: "Build Real Connections That Matter",
        desc: "Connect with people on a deeper level, where interactions feel genuine and meaningful. Moose is built for relationships, not just engagement.",
        point1: "Talk to real people, not curated personas",
        point2: "Create connections based on trust,\nnot appearance",
    },
    {
        img: "/card-4.png",
        title: "A Safer Space for Real People",
        desc: "Feel more secure in a platform designed to protect its users and maintain authenticity. Moose prioritizes safety without compromising your experience.",
        point1: "Reduced risk of fake accounts and scams",
        point2: "Strong systems to keep the community trusted",
    },
];

export default function Key() {
    const containerRef = useRef(null);
    const headerRef = useRef(null);
    const cardsWrapperRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const headerTl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".benefits-header",
                    start: "top 85%",
                    toggleActions: "play reverse play reverse",
                },
            });

            headerTl
                .from(".benefits-badge", {
                    y: 30,
                    opacity: 0,
                    duration: 0.5,
                    ease: "power3.out",
                })
                .from(
                    ".benefits-header h2 .word",
                    {
                        y: 35,
                        opacity: 0,
                        duration: 0.45,
                        stagger: 0.07,
                        ease: "power3.out",
                    },
                    "-=0.3"
                );

            const cards = gsap.utils.toArray<HTMLElement>(".benefits-card");

            cards.forEach((card, i) => {
                gsap.set(card, {
                    zIndex: i + 1,
                    yPercent: i === 0 ? 0 : i === 1 ? 106 : 220,
                });
            });

            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top 15%",
                onEnter: () => {
                    gsap.to(headerRef.current, {
                        y: -250,
                        opacity: 0,
                        duration: 0.6,
                        ease: "power2.out",
                    });
                    gsap.to(cardsWrapperRef.current, {
                        y: -60,
                        duration: 0.6,
                        ease: "power2.out",
                    });
                },

                onLeaveBack: () => {
                    gsap.to(headerRef.current, {
                        y: 0,
                        opacity: 1,
                        duration: 0.5,
                        ease: "power2.out",
                    });
                    gsap.to(cardsWrapperRef.current, {
                        y: 0,
                        duration: 0.5,
                        ease: "power2.out",
                    });
                },
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: () => `+=${cards.length * 100}%`,
                    pin: true,
                    scrub: true,
                },
            });

            cards.slice(1).forEach((card, i) => {
                tl.to(cards[i], {
                    opacity: 0,
                    scale: 0.5,
                    yPercent: -20,
                    ease: "none",
                })
                    .to(card, {
                        yPercent: 0,
                        ease: "none",
                    }, "<");

                if (cards[i + 2]) {
                    tl.to(cards[i + 2], {
                        yPercent: 106,
                        ease: "none",
                    }, "<");
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);


    return (
        <section ref={containerRef} className="benefits-section">
            <div ref={headerRef} className="benefits-header">
                <div className="benefits-badge">
                    <Image
                        src="/star-icon.png"
                        alt="Icon"
                        width={28}
                        height={28}
                    />
                    <span>Benefits</span>
                </div>

                <h2>
                    <span className="word">Experience</span><br />
                    <span className="green-line">
                        <span className="word">Future</span>{" "}
                        <span className="word">of</span>{" "}
                        <span className="word">Social</span>{" "}
                        <span className="word">Media</span>
                    </span>
                </h2>
            </div>

            <div ref={cardsWrapperRef} className="benefits-cards">
                {benefitsList.map((item, index) => (
                    <div key={index} className="benefits-card">
                        <div className="benefits-img">
                            <Image
                                src={item.img}
                                alt={item.title}
                                fill
                                unoptimized
                            />
                        </div>

                        <div className="benefits-text">
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                            <ul>
                                <li>
                                    <span className="point-icon">
                                        <Image src="/blk-arrow-icon.png" alt="icon" width={16} height={16} />
                                    </span>
                                    <span>{item.point1}</span>
                                </li>
                                <li>
                                    <span className="point-icon">
                                        <Image src="/blk-arrow-icon.png" alt="icon" width={16} height={16} />
                                    </span>
                                    <span>{item.point2}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
