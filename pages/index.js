import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from "../components/Header.js"
import Link from "next/link"

export default function Home() {
  return (
    <>
        <Header/>
        <section class={styles.fullscreenbg}>
    <section class={styles.homeinfo}>
        <div class={styles.container}>
            <h2>Get all your news in one place and so much more right here</h2> 
        </div>
    </section>
    <section class={styles.newscategoriessection}>
        <div class={styles.newscategoriesbox}>
            <div class={styles.newscategorybox}>
                <div class={styles.newscategoryboximage}>
                    <img src="/world-news.jpg" alt="worldnews" />
                </div>
                <span></span>
                <div class={styles.newscategoryboxinfo}>
                    <h3>
                        World
                    </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <Link href="/world-news"><button>Explore</button></Link>
                </div>
            </div>
            <div class={styles.newscategorybox}>
                <div class={styles.newscategoryboximage}>
                    <img src="/local news.jpeg" alt="localnews" />
                </div>
                <span></span>

                <div class={styles.newscategoryboxinfo}>
                    <h3>
                        Local
                    </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <Link href="/local-news"><button>Explore</button></Link>
                </div>
            </div>
            <div class={styles.newscategorybox}>
                <div class={styles.newscategoryboximage}>
                    <img src="/business-news.jpg" alt="businessnews" />
                </div>
                <span></span>

                <div class={styles.newscategoryboxinfo}>
                    <h3>
                        Business
                    </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <Link href="/business-news"><button>Explore</button></Link>
                </div>
            </div>
            <div class={styles.newscategorybox}>
                <div class={styles.newscategoryboximage}>
                    <img src="/sport-news.jpg"alt="sportnews" />
                </div>
                <span></span>

                <div class={styles.newscategoryboxinfo}>
                    <h3>
                        Sports
                    </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <Link href="/sports-news"><button>Explore</button></Link>
                </div>
            </div>
            <div class={styles.newscategorybox}>
                <div class={styles.newscategoryboximage}>
                    <img src="/entertainment-news.jpg" alt="entertainmentnews" />
                </div>
                <span></span>

                <div class={styles.newscategoryboxinfo}>
                    <h3>
                        Entertainment
                    </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <Link href="/entertainment-news"><button>Explore</button></Link>
                </div>
            </div>
            <div class={styles.newscategorybox}>
                <div class={styles.newscategoryboximage}>
                    <img src="/tech-news.jpg" alt="technews" />
                </div>
                <span></span>

                <div class={styles.newscategoryboxinfo}>
                    <h3>
                        Tech
                    </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <Link href="/tech-news"><button>Explore</button></Link>
                </div>
            </div>
        </div>

    </section>
</section>
    </>

  )
}
