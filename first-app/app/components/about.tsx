"use client";

import Image from "next/image";
import Link from "next/link";
import "./about.css";

export default function About() {
    return (
        <section id="about" className="about-section">
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
                <h1 className="about-title">
                    The all-in-one social <br />
                    platform built on <br />
                    authenticity.
                </h1>

                <div className="about-tagline">
                    <div className="gl-1"></div>
                    <p>Feel at ease with a social space you can trust.</p>
                    <div className="gl-2"></div>
                </div>

                <Link
                    href="https://play.google.com/store/apps/details?id=com.moose_social&hl=id"
                    className="about-cta"
                >
                    <span>Download Now</span>

                    <span className="cta-icon">
                        <svg
                            width="25"
                            height="25"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="7" y1="17" x2="17" y2="7" />
                            <polyline points="7 7 17 7 17 17" />
                        </svg>
                    </span>
                </Link>
            </div>
        </section>
    );
}
