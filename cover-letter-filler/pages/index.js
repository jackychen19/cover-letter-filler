import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Form from '../components/Form.js';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cover Letter Filler</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Cover Letter Filler
        </h1>
      <Form/>
      </main>


    </div>
  )
}
