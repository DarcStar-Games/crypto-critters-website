import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Crypto Critters</title>
        <meta name="description" content="Virtual Crypto Pets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Crypto Critters
        </h1>

        <p className={styles.description}>
          Get Started by Minting your very own Crypto Critter
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>How It Works &rarr;</h2>
            <p>Find in-depth information about Crypto Critters.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Crypto Critter-dex &rarr;</h2>
            <p>Learn about already minted Crypto Critters.</p>
          </a>

          <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={styles.card}
          >
            <h2>Roadmap &rarr;</h2>
            <p>Discover the Future of Crypto Critters.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Mint &rarr;</h2>
            <p>
              Create your very own Crypto Critter!
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
