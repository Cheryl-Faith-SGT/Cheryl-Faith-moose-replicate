"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "./nav.css";

export default function Nav() {
    const [activeLink, setActiveLink] = useState("#home");
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const menuItems = [
        { name: "Home", href: "#home" },
        { name: "About Us", href: "#about" },
        { name: "Key Features", href: "#key" },
        { name: "FAQ", href: "#faq" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (isMobileOpen) return;

            const currentScrollY = window.scrollY;

            if (currentScrollY <= 50) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY) {
                setIsVisible(false);
            } else if (currentScrollY < lastScrollY) {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY, isMobileOpen]);

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => {
        setActiveLink(href);
        setIsMobileOpen(false);

        if (href === "#home") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            window.history.pushState(null, "", "#home");
            return;
        }

        if (href.startsWith("#")) {
            const targetElement = document.querySelector(href);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: "smooth" });
                window.history.pushState(null, "", href);
            }
        }
    };

    const renderWaveChars = (text: string, startIndex = 0) =>
        text.split("").map((char, index) => (
            <span
                key={index}
                className="wave-char"
                style={
                    {
                        "--char-index": index + startIndex,
                    } as React.CSSProperties
                }
            >
                {char === " " ? "\u00A0" : char}
            </span>
        ));

    return (
        <nav className={`navbar ${isVisible ? "nav-visible" : "nav-hidden"}`}>
            <div className={`nav-wrapper ${isMobileOpen ? "mobile-open" : ""}`}>
                <div className="nav-header">
                    <Image
                        src="/moose-logo-text.png"
                        alt="MOOSE"
                        width={130}
                        height={44}
                        priority
                        className="nav-logo"
                        onClick={() => {
                            setActiveLink("#home");
                            setIsMobileOpen(false);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                    />

                    <button
                        type="button"
                        aria-label="Toggle Menu"
                        className={`hamburger-btn ${isMobileOpen ? "open" : ""}`}
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                    >
                        <span className="line line-1" />
                        <span className="line line-2" />
                        <span className="line line-3" />
                    </button>
                </div>

                <div className={`nav-collapse ${isMobileOpen ? "show" : ""}`}>
                    <div className="nav-menu">
                        {menuItems.map((item) => {
                            const isActive = activeLink === item.href;
                            return (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                    className={`nav-link ${isActive ? "active" : ""}`}
                                >
                                    <span className="wave-box">
                                        <span className="wave-layer wave-layer-top">
                                            {renderWaveChars(item.name, 0)}
                                        </span>

                                        <span
                                            className="wave-layer wave-layer-bottom"
                                            aria-hidden="true"
                                        >
                                            <span className="nav-dot-hover" />
                                            {renderWaveChars(item.name, 0)}
                                        </span>
                                    </span>
                                </a>
                            );
                        })}
                    </div>

                    <Link
                        href="https://play.google.com/store/apps/details?id=com.moose_social&hl=id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-cta"
                        onClick={() => setIsMobileOpen(false)}
                    >
                        <span className="wave-box">
                            <span className="wave-layer wave-layer-top">
                                {renderWaveChars("Download Now", 0)}
                            </span>
                            <span
                                className="wave-layer wave-layer-bottom"
                                aria-hidden="true"
                            >
                                {renderWaveChars("Download Now", 0)}
                            </span>
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
