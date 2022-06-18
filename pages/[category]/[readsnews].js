import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Header from "../../components/Header.js"
import {useRouter} from "next/router"



export default function Home() {
  const router = useRouter();
  const data = router.query;
  
  const date = new Date(data.publishedAt).toDateString().split(" ");
  return (
    <>
        <Header/>
        <section class={styles.fullscreenbgnews}>
            <section class={styles.newspagesection}>
                <div class={styles.newspage}>
                    <div class={styles.newspageimage}>
                        <img src={data.urlToImage} alt="" />
                    </div>
                    <div class={styles.newspagebox}>
                        <p class={styles.newspageauthor}>Author: {data.author}</p>
                        <p class={styles.newspagedate}>{`${date[1]} ${date[2]}, ${date[3]}`}</p>
                    </div>
                    <h2 class={styles.newspagetitle}>{data.title}</h2>
                    <p class={styles.newspagedescription}>{data.content.length === 0 ? data.description: data.content} </p>
                </div>
            </section>                                       
        </section>
        
    </>

  )
}
