import Link from 'next/link';
import Image from 'next/image';
import './landing.css';

export default function Landing() {
    return (
        <section id="home" className="landing">
            <div className="landing-content">
                <div className="landing-left">
                    <h1>
                        Start sharing <br />
                        real moments <br />
                        <span className="landing-subtitle">
                            <span className="landing-line" />
                            With Moose
                        </span>
                    </h1>

                    <Link
                        href="https://play.google.com/store/apps/details?id=com.moose_social&hl=id"
                        className="landing-cta"
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

                <div className="landing-right">
                    <p>
                        Discover the <br />
                        Social Media App That <br />
                        Values Authenticity
                    </p>
                </div>
            </div>

            <div className="landing-phone">
                <Image
                    src="/moose-phone.png"
                    alt="Moose Phone App"
                    width={600}
                    height={600}
                    priority
                />
            </div>

            <div className="social-box">
                <div className="marquee-wrapper">
                    <div className="marquee-track">
                        <h3>MOOSE SOCIAL MEDIA •&nbsp;</h3>
                        <h3>MOOSE SOCIAL MEDIA •&nbsp;</h3>
                    </div>
                </div>

                <div className="social-line">
                    <Image
                        src="/line.png"
                        alt="-"
                        width={2000}
                        height={100}
                    />
                </div>
                <p>Connect with Real People and Share Genuine <br />
                    Moments Without Filters or Editing Tools.</p>
                <p className="social-tags">
                    <span>Real</span>
                    <span>Unfiltered</span>
                    <span>Proven</span>
                    <span>Genuine</span>
                    <span>Authentic</span>
                </p>
            </div>
        </section>
    );
}
