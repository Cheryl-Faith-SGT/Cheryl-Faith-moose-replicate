"use client";

import { useEffect, useRef } from "react";
import "./benefits.css";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Key() {
    return (
        <section className="benefits-section">
            <div className="benefits-header">
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
        </section>
    );
}
