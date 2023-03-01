import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/comp/Navbar'
import Footer from '@/comp/Footer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fugiat unde officiis amet magni molestias ipsum aliquam voluptate enim molestiae tempore repellendus consequuntur, maiores itaque hic similique, facere illum? Voluptas?</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nobis magnam esse consectetur, veniam culpa temporibus error iure molestias id, aliquid libero! Debitis, veniam sunt minus veritatis nostrum et facilis?</p>
        
        <Link className={styles.btn} href="/ninjas">See Ninja Listing</Link>
        
      </div>
    </>
  )
}
