import styles from "../styles/Home.module.css";
import Link from "next/link";

function Newstag(props) {
    const date = new Date(props.news.publishedAt).toDateString().split(" ");

    return (
        <>
            <div className={styles.categorynewsbox}>
                <div className={styles.newsinfo}>
                    <p
                        className={styles.newsdate}
                    >{`${date[1]} ${date[2]}, ${date[3]}`}</p>
                    <h3 className={styles.newstitle}>{props.news.title}</h3>
                    <p className={styles.newsdescription}>
                        {" "}
                        {props.news.description}
                    </p>
                    <div className={styles.newsinnerbox}>
                        <p className={styles.newsauthor}>
                            Author: {props.news.author}
                        </p>
                        <Link
                            href={{
                                pathname: `/${props.category}/news`,
                                query: props.news,
                            }}
                        >
                            <button>Read</button>
                        </Link>
                    </div>
                </div>
                <div className={styles.newsimage}>
                    <img src={props.news.urlToImage} alt="" />
                </div>
            </div>
        </>
    );
}

export default Newstag;
