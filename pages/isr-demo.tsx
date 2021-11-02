import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { GetStaticProps } from 'next';
import Link from 'next/link';

type Props = { nowDate: string; pageTitle: string };

export default function ISRDemo(props: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{props.pageTitle}</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>{props.pageTitle}</h2>
        <p>What time is it now?</p>
        <p>It&apos;s {props.nowDate}.</p>
        <p className={styles.description}>
          <Link href={'/'}>
            <a>Go back</a>
          </Link>
        </p>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  return {
    props: {
      nowDate: new Date().toLocaleString(),
      pageTitle: 'ISR Demo',
    },
    revalidate: 5, // ISR settings
  };
};