"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Loading() {
    const [isRevealed, setIsRevealed] = useState(false);
    const [isSliding, setIsSliding] = useState(false);
    const [isRemoved, setIsRemoved] = useState(false);

    useEffect(() => {
        const revealTimer = setTimeout(() => {
            setIsRevealed(true);
        }, 100);

        const slideTimer = setTimeout(() => {
            setIsSliding(true);
        }, 2000);

        const removeTimer = setTimeout(() => {
            setIsRemoved(true);
        }, 2700);

        return () => {
            clearTimeout(revealTimer);
            clearTimeout(slideTimer);
            clearTimeout(removeTimer);
        };
    }, []);

    if (isRemoved) return null;

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "#00d776",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9999,
                transition: "transform 1s ease-in-out",
                transform: isSliding ? "translateX(100%)" : "translateX(0)",
            }}
        >
            <div
                style={{
                    position: "relative",
                    width: "450px",
                    height: "450px",
                    clipPath: isRevealed ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
                    transition: "clip-path 1.2s ease-out",
                }}
            >
                <Image
                    src="/moose-logo-text.png"
                    alt="Logo"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                />
            </div>
        </div>
    );
}
