import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Header from "../../components/Header.js";
import { useRouter } from "next/router";

export default function Home() {
    // Getting news data from link tag
    const router = useRouter();
    const data = router.query;

    //  Changing the format of the date
    const date = new Date(data.publishedAt).toDateString().split(" ");
    return (
        <>
            <Header />
            <section className={styles.fullscreenbgnews}>
                <section className={styles.newspagesection}>
                    <div className={styles.newspage}>
                        <div className={styles.newspageimage}>
                            <img src={data.urlToImage} alt="" />
                        </div>
                        <div className={styles.newspagebox}>
                            <p className={styles.newspageauthor}>
                                Author: {data.author}
                            </p>
                            <p
                                className={styles.newspagedate}
                            >{`${date[1]} ${date[2]}, ${date[3]}`}</p>
                        </div>
                        <h2 className={styles.newspagetitle}>{data.title}</h2>
                        <p className={styles.newspagedescription}>
                            {data.content.length === 0
                                ? data.description
                                : data.content}{" "}
                        </p>
                    </div>
                </section>
            </section>
        </>
    );
}
