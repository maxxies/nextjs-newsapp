import styles from "../styles/Home.module.css"
import Image from "next/image"
import logopic from "../Images/logo1.png"


function Header(props){
    return(
        <>
            <header class={styles.header}>
               <div class={styles.title}>
                    <Image src={logopic} alt="logo"/>  
                </div>
            </header>
        </>
    );
}
export default Header;