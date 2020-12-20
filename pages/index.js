import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nacho Torrella</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Frontend Engineer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image layout="fill" className={styles.profileImage} src="/images/profile-image.jpg" alt="Nacho Torrella" quality={100}/>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>Nacho Torrella</h1>
          <p className={styles.description}>Frontend Engineer</p>
        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
