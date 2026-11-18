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
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                    className={`nav-link ${isActive ? "active" : ""}`}
                                >
                                    <span className="nav-dot" />
                                    <span className="nav-text-link">{item.name}</span>
                                </Link>
                            );
                        })}
                    </div>

                    <Link
                        href="https://play.google.com/store/apps/details?id=com.moose_social&hl=id"
                        className="nav-cta"
                        onClick={() => setIsMobileOpen(false)}
                    >
                        Download Now
                    </Link>
                </div>
            </div>
        </nav>
    );
}
