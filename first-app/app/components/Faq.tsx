"use client";

import { useState, useEffect, useRef } from "react";
import "./faq.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqList = [
    {
        question: "What makes MOOSE different from other social media apps?",
        answer: "MOOSE focuses on authenticity, allowing users to share genuine content without editing or filters. Our community values real connections and genuine interactions.",
    },
    {
        question: "How does MOOSE ensure security and prevent fake accounts?",
        answer: "MOOSE uses facial recognition, device ID, and location verification during registration. This strict process ensures a trustworthy community where everyone is real.",
    },
    {
        question: "Can I edit my posts after sharing?",
        answer: "You can edit captions and add additional context, but the original photos and videos remain unedited, preserving the authenticity of the content.",
    },
    {
        question: "What if I need help or have technical issues?",
        answer: "Our customer support team is available 24/7 to assist you with any issues or questions you might have. Contact us through the app or on our website.",
    },
    {
        question: "Is MOOSE free to use?",
        answer: "Yes, MOOSE is free to download and use. We offer additional premium features for a fee, but the basic functionality is always free.",
    },
    {
        question: "How does MOOSE stand out among social media platforms?",
        answer: "MOOSE is dedicated to authenticity. Our no-fake content policy, comprehensive security measures, and unique features like location-based dating ensure a genuine experience.",
    },
    {
        question: "Can I form or join groups on MOOSE?",
        answer: "Yes! MOOSE allows you to create or join group chats, making it easy to connect with others based on shared interests or locations.",
    },
    {
        question: "What if I need help using the app?",
        answer: "Our dedicated customer support team is always here to assist you. Reach out via the app or on our website for any help you need.",
    },
];

export default function Faq() {
    const [openIndices, setOpenIndices] = useState<number[]>([]);
    const containerRef = useRef<HTMLElement>(null);

    const toggleFaq = (index: number) => {
        setOpenIndices((prev) =>
            prev.includes(index)
                ? prev.filter((item) => item !== index)
                : [...prev, index]
        );
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            const headerTl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".faq-header",
                    start: "top 85%",
                    toggleActions: "play reverse play reverse",
                },
            });

            headerTl
                .from(".faq-badge", {
                    y: () => Math.min(window.innerHeight, window.innerWidth) * 0.028,
                    opacity: 0,
                    duration: 0.5,
                    ease: "power3.out",
                })
                .from(
                    ".faq-header h2 .word",
                    {
                        y: () => Math.min(window.innerHeight, window.innerWidth) * 0.032,
                        opacity: 0,
                        duration: 0.45,
                        stagger: 0.07,
                        ease: "power3.out",
                    },
                    "-=0.3"
                );

            gsap.from(".faq-item", {
                y: () => Math.min(window.innerHeight, window.innerWidth) * 0.042,
                opacity: 0,
                duration: 0.6,
                stagger: 0.2,
                ease: "power3.out",
                clearProps: "transform",
                scrollTrigger: {
                    trigger: ".faq-dropdown",
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 360);

        return () => clearTimeout(timer);
    }, [openIndices]);

    return (
        <section id="faq" ref={containerRef} className="faq-section">
            <div className="faq-inner">
                <div className="faq-header">
                    <div className="faq-badge">
                        <Image
                            src="/tanya-icon.png"
                            alt="Icon"
                            width={28}
                            height={28}
                        />
                        <span>FAQ</span>
                    </div>

                    <h2>
                        <span className="word">Frequently</span>{" "}
                        <span className="word">Asked</span>{" "}
                        <span className="green-line">
                            <span className="word">Questions</span>
                        </span>
                    </h2>
                </div>

                <div className="faq-dropdown">
                    {faqList.map((item, index) => {
                        const isOpen = openIndices.includes(index);
                        return (
                            <div
                                key={index}
                                className={`faq-item ${isOpen ? "open" : ""}`}
                            >
                                <button
                                    type="button"
                                    className="faq-question"
                                    onClick={() => toggleFaq(index)}
                                    aria-expanded={isOpen}
                                >
                                    <span>{item.question}</span>
                                    <span className="faq-icon">く</span>
                                </button>

                                <div className="faq-answer-wrapper">
                                    <div className="faq-answer-inner">
                                        <hr className="faq-divider" />
                                        <p className="faq-answer">{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
