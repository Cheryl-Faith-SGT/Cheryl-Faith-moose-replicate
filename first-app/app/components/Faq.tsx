"use client";

import { useEffect, useRef } from "react";
import "./faq.css";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Key() {
    return (
        <section className="faq-section">
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
        </section>
    );
}
