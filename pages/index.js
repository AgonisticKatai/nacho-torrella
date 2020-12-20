import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nacho Torrella</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image layout="fill" className={styles.profileImage} src="/images/profile-image.jpg" alt="Nacho Torrella"/>
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
