import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header.js";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Header />
            <section className={styles.fullscreenbg}>
                <section className={styles.homeinfo}>
                    <div className={styles.container}>
                        <h2>
                            Get all your news in one place and so much more
                            right here
                        </h2>
                    </div>
                </section>
                <section className={styles.newscategoriessection}>
                    <div className={styles.newscategoriesbox}>
                        <div className={styles.newscategorybox}>
                            <div className={styles.newscategoryboximage}>
                                <img src="/world-news.jpg" alt="worldnews" />
                            </div>
                            <span></span>
                            <div className={styles.newscategoryboxinfo}>
                                <h3>World</h3>
                                <p>Enjoy top headlines from around the globe</p>
                                <Link href="/world-news">
                                    <button>Explore</button>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.newscategorybox}>
                            <div className={styles.newscategoryboximage}>
                                <img src="/local news.jpeg" alt="localnews" />
                            </div>
                            <span></span>

                            <div className={styles.newscategoryboxinfo}>
                                <h3>Local</h3>
                                <p>
                                    Get all the top heqdlines in the country now
                                </p>
                                <Link href="/local-news">
                                    <button>Explore</button>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.newscategorybox}>
                            <div className={styles.newscategoryboximage}>
                                <img
                                    src="/business-news.jpg"
                                    alt="businessnews"
                                />
                            </div>
                            <span></span>

                            <div className={styles.newscategoryboxinfo}>
                                <h3>Business</h3>
                                <p>
                                    Know what's happening in the business world
                                    today
                                </p>
                                <Link href="/business-news">
                                    <button>Explore</button>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.newscategorybox}>
                            <div className={styles.newscategoryboximage}>
                                <img src="/sport-news.jpg" alt="sportnews" />
                            </div>
                            <span></span>

                            <div className={styles.newscategoryboxinfo}>
                                <h3>Sports</h3>
                                <p>
                                    Learn to know the daily happenings in the
                                    sports world
                                </p>
                                <Link href="/sports-news">
                                    <button>Explore</button>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.newscategorybox}>
                            <div className={styles.newscategoryboximage}>
                                <img
                                    src="/entertainment-news.jpg"
                                    alt="entertainmentnews"
                                />
                            </div>
                            <span></span>

                            <div className={styles.newscategoryboxinfo}>
                                <h3>Entertainment</h3>
                                <p>
                                    Read to know what's trending in the
                                    entertainment industry
                                </p>
                                <Link href="/entertainment-news">
                                    <button>Explore</button>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.newscategorybox}>
                            <div className={styles.newscategoryboximage}>
                                <img src="/tech-news.jpg" alt="technews" />
                            </div>
                            <span></span>

                            <div className={styles.newscategoryboxinfo}>
                                <h3>Technology</h3>
                                <p>
                                    Whats's new in the tech industry? Get to
                                    know them from here
                                </p>
                                <Link href="/tech-news">
                                    <button>Explore</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}
