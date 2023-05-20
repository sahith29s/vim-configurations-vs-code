import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <nav className={styles.nav}>
          <ul>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"> <li>About</li></Link>
            <Link href="/contact"> <li>contact</li></Link>
            <Link href="/blog"> <li>Blogs</li></Link>
            
            
            
            
          </ul>
        </nav>

          <div className={styles.body}>
            <header>
              <h1>Hunting coder</h1>
              <div>A blog for hunters</div>
            </header>
          </div>

          
          
      </main>
    </>
  );
}
