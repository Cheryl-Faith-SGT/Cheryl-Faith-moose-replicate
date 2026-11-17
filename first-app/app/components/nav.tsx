"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './nav.css';

export default function Nav() {
    const [activeLink, setActiveLink] = useState('#home');
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const menuItems = [
        { name: 'Home', href: '#home' },
        { name: 'About Us', href: '#about' },
        { name: 'Key Features', href: '#key' },
        { name: 'FAQ', href: '#faq' },
    ];

    useEffect(() => {
        const handleScroll = () => {
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

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        setActiveLink(href);

        if (href === '#home') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            window.history.pushState(null, '', '#home');
        }
    };

    return (
        <nav className={`navbar ${isVisible ? 'nav-visible' : 'nav-hidden'}`}>
            <Image
                src="/moose-logo-text.png"
                alt="MOOSE"
                width={150}
                height={50}
                priority
                style={{ cursor: 'pointer' }}
                onClick={() => {
                    setActiveLink('#home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
            />

            <div className="nav-menu">
                {menuItems.map((item) => {
                    const isActive = activeLink === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={(e) => handleNavClick(e, item.href)}
                            className={`nav-link ${isActive ? 'active' : ''}`}
                        >
                            <span className="nav-dot" />
                            <span>{item.name}</span>
                        </Link>
                    );
                })}
            </div>

            <Link
                href="https://play.google.com/store/apps/details?id=com.moose_social&hl=id"
                className="nav-cta"
            >
                Download Now
            </Link>
        </nav>
    );
}
