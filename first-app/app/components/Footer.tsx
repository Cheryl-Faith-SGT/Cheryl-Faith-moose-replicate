import Image from "next/image";
import Link from "next/link";
import "./footer.css";

export default function Footer() {
    const renderWaveChars = (text: string) =>
        text.split("").map((char, index) => (
            <span
                key={index}
                className="footer-wave-char"
                style={{ "--char-index": index } as React.CSSProperties}
            >
                {char === " " ? "\u00A0" : char}
            </span>
        ));

    return (
        <footer className="footer-section">
            <div className="footer-container">
                <div className="footer-line">
                    <Image
                        src="/line-green.png"
                        alt=""
                        width={2000}
                        height={100}
                        className="footer-line-img"
                    />
                </div>

                <div className="footer-bottom">
                    <p className="footer-text">
                        © 2025 Copyright - Moose <br />
                        Designed by SGT
                    </p>

                    <Link
                        href="https://play.google.com/store/apps/details?id=com.moose_social&hl=id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-cta"
                    >
                        <span className="footer-wave-box">
                            <span className="footer-wave-layer footer-wave-top">
                                {renderWaveChars("Download Now")}
                            </span>
                            <span
                                className="footer-wave-layer footer-wave-bottom"
                                aria-hidden="true"
                            >
                                {renderWaveChars("Download Now")}
                            </span>
                        </span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
