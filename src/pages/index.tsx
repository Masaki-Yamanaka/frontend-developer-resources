import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>

        <p className={styles.description}>
          <Link href={'/ssr-demo'}>
            <a>SSR Demo</a>
          </Link>
        </p>

        <p className={styles.description}>
          <Link href={'/ssg-demo'}>
            <a>SSG Demo</a>
          </Link>
        </p>

        <p className={styles.description}>
          <Link href={'/isr-demo'}>
            <a>ISR Demo</a>
          </Link>
        </p>
        <p className={styles.description}>
          <Link href={'/login'}>
            <a>Google Login Demo</a>
          </Link>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        ></a>
      </footer>
    </div>
  );
};

export default Home;