import styles from "../styles/Home.module.css"
import Link from "next/link"

function Newstag(props){
    const date = new Date(props.news.publishedAt).toDateString().split(" ")

    return(
        <>
            <div class={styles.categorynewsbox}>
                <div class={styles.newsinfo}>
                    <p class={styles.newsdate}>{`${date[1]} ${date[2]}, ${date[3]}`}</p>
                    <h3 class={styles.newstitle}>{props.news.title}</h3>
                    <p class={styles.newsdescription}> {props.news.description}</p>
                    <div class={styles.newsinnerbox}>
                        <p class={styles.newsauthor}>Author: {props.news.author}</p>
                        <Link href={{ pathname:`/${props.category}/news`, query:props.news}}><button>Read</button></Link>
                    </div>
                </div>
                <div class={styles.newsimage}>
                    <img src={props.news.urlToImage} alt="" />
                </div>
            </div>
        </>
    );
}

export default Newstag;