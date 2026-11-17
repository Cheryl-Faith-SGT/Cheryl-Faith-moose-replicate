"use client";

import "./key.css";
import Image from "next/image";
import Link from "next/link";

export default function Key() {
    return (
        <section id="key" className="key-section">
            <div className="key-header">
                <div className="key-badge">
                    <Image
                        src="/crown-icon.png"
                        alt="Icon 1"
                        width={28}
                        height={28}
                    />
                    <span>Key Features</span>
                </div>

                <h2>
                    Built for Real. <br />
                    <span>Designed for You.</span>
                </h2>
            </div>

            <div className="key-grid">
                <div className="key-card-left">
                    <div className="left-visual-wrapper">
                        <div className="left-img-large">
                            <Image
                                src="/curv-line.png"
                                alt="Curve Line"
                                width={376}
                                height={264}
                                className="img-full-cover"
                            />
                        </div>

                        <div className="left-img-small">
                            <Image
                                src="/layer1.png"
                                alt="Trust Visual"
                                width={344}
                                height={180}
                                className="img-full-cover"
                            />
                        </div>

                        <div className="floating-icon icon-top-left">
                            <Image
                                src="https://placehold.co"
                                alt="Icon 1"
                                width={22}
                                height={22}
                                unoptimized
                            />
                        </div>
                        <div className="floating-icon icon-top-center">
                            <Image
                                src="https://placehold.co"
                                alt="Icon 2"
                                width={22}
                                height={22}
                                unoptimized
                            />
                        </div>
                        <div className="floating-icon icon-top-right">
                            <Image
                                src="https://placehold.co"
                                alt="Icon 3"
                                width={22}
                                height={22}
                                unoptimized
                            />
                        </div>
                        <div className="floating-icon icon-bottom-left">
                            <Image
                                src="https://placehold.co"
                                alt="Icon 4"
                                width={22}
                                height={22}
                                unoptimized
                            />
                        </div>
                        <div className="floating-icon icon-bottom-center">
                            <Image
                                src="https://placehold.co"
                                alt="Icon 5"
                                width={22}
                                height={22}
                                unoptimized
                            />
                        </div>
                        <div className="floating-icon icon-bottom-right">
                            <Image
                                src="https://placehold.co"
                                alt="Icon 6"
                                width={22}
                                height={22}
                                unoptimized
                            />
                        </div>
                    </div>

                    <div className="left-card-text">
                        <h3>Trust What You See</h3>
                        <p>
                            No fake profiles, no misleading content — just real
                            people and real moments. Moose ensures everything
                            you see is authentic, so you can scroll and connect
                            without second guessing.
                        </p>
                    </div>
                </div>

                <div className="key-card-right">
                    <div className="right-visual-box">
                        <div className="right-card-text">
                            <h3>Be Yourself, Without Pressure</h3>
                            <p>
                                Forget the need to be perfect. Share your life
                                as it is — unfiltered, unedited, and real, in a
                                space where authenticity matters more than
                                appearance.
                            </p>
                        </div>

                        <div className="right-vertical-stack">
                            <Image
                                src="/key-img-1.png"
                                alt="Be Yourself 1"
                                width={500}
                                height={140}
                                className="stack-img stack-img-1"
                            />
                            <Image
                                src="/key-img-2.png"
                                alt="Be Yourself 2"
                                width={500}
                                height={140}
                                className="stack-img stack-img-2"
                            />
                            <Image
                                src="/key-img-3.png"
                                alt="Be Yourself 3"
                                width={500}
                                height={140}
                                className="stack-img stack-img-3"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="key-grid-bottom">
                <div className="key-card-3">
                    <div className="card-3-text">
                        <h3>Connect for Real</h3>
                        <p>
                            Go beyond likes and curated personas. Connect with real people and build genuine relationships based on trust, not illusion.
                        </p>
                    </div>

                    <div className="card-3-visual">
                        <div className="card-3-img-back">
                            <Image
                                src="/music-up.png"
                                alt="Connection Back"
                                width={320}
                                height={210}
                                className="img-natural"
                            />
                        </div>
                        <div className="card-3-img-front">
                            <Image
                                src="/music.png"
                                alt="Connection Front"
                                width={260}
                                height={170}
                                className="img-natural"
                            />
                        </div>
                    </div>
                </div>

                <div className="key-card-4">
                    <div className="card-4-visual">
                        <div className="card-4-img">
                            <Image
                                src="/moose_logo.png"
                                alt="MOOSE logo"
                                width={190}
                                height={190}
                                className="img-natural"
                            />
                        </div>
                    </div>

                    <div className="card-4-bottom">
                        <h3>Get the app</h3>
                        <Link
                            href="https://play.google.com/store/apps/details?id=com.moose_social&hl=id"
                            className="card-4-botton"
                        >
                            Download Now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
