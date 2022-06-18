import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Newstag from "../../components/Newstag.js"
import Header from "../../components/Header.js"
import {useRouter} from "next/router"
import {useState} from  "react"


export default function Home() {
  const router = useRouter();
  const category = router.query.category;

  const [data, setData] = useState({
    "status": "ok",
    "totalResults": 10,
    "articles": [
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Migrants: Some due for removal from the UK could be electronically tagged",
            "description": "Asylum claimants who successfully challenged their removal to Rwanda this week could be among the first to be monitored.",
            "url": "http://www.bbc.co.uk/news/uk-61849433",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1C12/production/_125468170_gettyimages-1241341295.jpg",
            "publishedAt": "2022-06-18T04:37:15.3950736Z",
            "content": "Some asylum claimants who arrived in the UK in small boats or in the back of lorries could be electronically tagged under new Home Office plans.\r\nA 12-month trial will target adults due to be removed… [+3821 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Marcelo Pecci: Killers who shot Paraguayan prosecutor on honeymoon convicted",
            "description": "Officials say Marcelo Pecci, a famed anti-mafia prosecutor, was likely targeted by drugs gangs.",
            "url": "http://www.bbc.co.uk/news/world-latin-america-61850020",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/DBDE/production/_125468265_hi075918229.jpg",
            "publishedAt": "2022-06-18T04:37:14.0672789Z",
            "content": "By Matt MurphyBBC News\r\nFour people accused of murdering a high-profile Paraguayan prosecutor while he was on his honeymoon have been sentenced to 23 years in prison. \r\nThe accused confessed to killi… [+3241 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Big Tech must deal with disinformation or face fines, says EU",
            "description": "Tighter EU rules will demand firms such as Google and Meta tackle disinformation on their platforms.",
            "url": "http://www.bbc.co.uk/news/technology-61817647",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/B468/production/_125448164_gettyimages-1230188816-1.jpg",
            "publishedAt": "2022-06-18T02:52:18.3166562Z",
            "content": "By Tom Gerken &amp; Liv McMahonTechnology Team\r\nLarge tech companies, such as Google and Meta, will have to take action on deepfakes and fake accounts - or risk facing huge fines.\r\nDeepfakes are vide… [+5555 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Gatwick: Passenger with restricted mobility dies after leaving flight",
            "description": "The man, a restricted mobility passenger, left an EasyJet plane and later fell on an escalator.",
            "url": "http://www.bbc.co.uk/news/uk-england-sussex-61837369",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/16540/production/_125465419_gettyimages-1288102743-594x594.jpg",
            "publishedAt": "2022-06-18T02:22:17.2873327Z",
            "content": "A passenger with restricted mobility has died at Gatwick Airport after leaving an aircraft.\r\nGatwick said staff were helping to disembark three passengers with restricted mobility at the time, includ… [+3422 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC Sport",
            "title": "Gymnasts reveal stories of abuse",
            "description": "Training on broken bones, punished for toilet breaks, developing eating disorders - gymnasts tell their stories of abuse.",
            "url": "https://www.bbc.co.uk/sport/gymnastics/61843628",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/E25A/production/_125464975_61847101.jpg",
            "publishedAt": "2022-06-18T02:22:15.3798052Z",
            "content": "'This isn't tough coaching and slight mistreatment' - reaction to the Whyte Review\r\nThis week, a damning report led by Anne Whyte QC laid bare \"systemic\" issues of physical and emotional abuse in gym… [+8215 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Why Watergate still resonates 50 years later",
            "description": "A Watergate prosecutor on the similarities she sees between that scandal and last year's US Capitol riot.",
            "url": "http://www.bbc.co.uk/news/61848490",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/66AE/production/_125468262_p0cfpqfg.jpg",
            "publishedAt": "2022-06-18T01:37:19.3017069Z",
            "content": "It's been 50 years since five men with links to the White House broke into the Democratic National Committee headquarters, launching a scandal that eventually led to President Richard Nixon resigning… [+164 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Russia sentences US teacher to 14 years for cannabis smuggling",
            "description": "Former US embassy employee Marc Fogel was detained in mid-August at Sheremetyevo airport.",
            "url": "http://www.bbc.co.uk/news/world-us-canada-61849579",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1448E/production/_125468038_screenshot2022-06-17at4.01.56pm.png",
            "publishedAt": "2022-06-17T23:52:21.506073Z",
            "content": "A Russian court has sentenced a former US diplomat to 14 years in prison for \"large-scale\" cannabis smuggling.\r\nMarc Fogel had previously worked at the US embassy in Moscow, but was employed as an En… [+1960 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Remains of UK journalist Phillips identified in Brazil",
            "description": "UK journalist Dom Phillips and indigenous expert Bruno Pereira went missing in the Amazon on 5 June.",
            "url": "http://www.bbc.co.uk/news/world-latin-america-61848789",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/83B3/production/_115651733_breaking-large-promo-nc.png",
            "publishedAt": "2022-06-17T20:22:23.567775Z",
            "content": "Mr Phillips, 57, and Mr Pereira, 41, were first reported missing on 5 June. Earlier this week, a suspect confessed to burying the bodies."
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "How Texans have coped without water in US heat wave",
            "description": "A water outage has affected about 165,000 people in the western city of Odessa.",
            "url": "http://www.bbc.co.uk/news/world-us-canada-61835109",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/C0B7/production/_125453394_123_1.jpg",
            "publishedAt": "2022-06-17T19:22:24.2549816Z",
            "content": "By Chloe KimBBC News, Washington\r\nOver 160,000 people in the Texas city of Odessa have been without water for two days as temperatures topped 36C (97F). How are they coping?\r\nIn the middle of a scorc… [+4590 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Russia's Putin condemns 'mad and thoughtless' Western sanctions",
            "description": "The Russian president says the economic restrictions are \"more harmful\" to those who imposed them.",
            "url": "http://www.bbc.co.uk/news/world-europe-61847300",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/164DC/production/_125465319_0cd07d50-0684-4e78-a71a-a5e90ad4cb47.jpg",
            "publishedAt": "2022-06-17T17:37:20.4430398Z",
            "content": "The sanctions imposed by the West on Russia after its invasion of Ukraine are \"mad and thoughtless\", President Vladimir Putin has said.\r\nSpeaking at a forum in St Petersburg, he said \"the economic bl… [+1601 chars]"
        }
    ]
})

  return (
    <>
        <Header/>
        <section class={styles.fullscreenbg}>

          <section class={styles.categoryheadingsection}>
            <div class={styles.categorytitle}>
              <h2>{category.replace("-"," ").toUpperCase()}</h2>
            </div>
          </section>
          <section class={styles.categorynewssection}>
            <div class={styles.categorynewsboxes}>

            {
              data['articles'].map((news,index)=>{
                return(
                  <Newstag news={news} category={category}/>
                );
              })
            }
            </div>
          </section>
        </section>
    </>

  )
}