import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Newstag from "../../components/Newstag.js";
import Header from "../../components/Header.js";
import { useRouter } from "next/router";

export default function Home(props) {
    const router = useRouter();
    const category = router.query.category;

    return (
        <>
            <Header />
            <section className={styles.fullscreenbg}>
                <section className={styles.categoryheadingsection}>
                    <div className={styles.categorytitle}>
                        <h2>{category.replace("-", " ").toUpperCase()}</h2>
                    </div>
                </section>
                <section className={styles.categorynewssection}>
                    <div className={styles.categorynewsboxes}>
                        {props.status === false ? (
                            props.newsdata.map((news, index) => {
                                return (
                                    <Newstag news={news} category={category} />
                                );
                            })
                        ) : (
                            <h3 className={styles.error}>
                                Weak or No internet connection. Try again
                            </h3>
                        )}
                    </div>
                </section>
            </section>
        </>
    );
}

export async function getServerSideProps(context) {
    // Geting category type
    const { params } = context;
    const { category } = params;

    var url;

    //  Setting up urls based on the category type
    switch (category) {
        case "world-news":
            url =
                "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=af758ab8a78a4da4a8640cb92490b64b";
            break;
        case "sport-news":
            url =
                "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=af758ab8a78a4da4a8640cb92490b64b";
            break;
        case "business-news":
            url =
                "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=af758ab8a78a4da4a8640cb92490b64b";
            break;
        case "entertainment-news":
            url =
                "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=af758ab8a78a4da4a8640cb92490b64b";
            break;
        case "tech-news":
            url =
                "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=af758ab8a78a4da4a8640cb92490b64b";
            break;
        case "local-news":
            url =
                "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=af758ab8a78a4da4a8640cb92490b64b";
            break;

        default:
            url =
                "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=af758ab8a78a4da4a8640cb92490b64b";
            break;
    }
    var status;
    var data;
    //  Fetching news based on the url
    try {
        const response = await fetch(url);
        data = await response.json();
        status = false;
    } catch (err) {
        status = true;
        data = {
            articles: [{}],
        };
    }
    //setting fetched news to props
    return {
        props: {
            newsdata: data["articles"],
            status: status,
        },
    };
}
