import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Resource.module.scss';

const Resource: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Resource</title>
        <meta name='description' content='Resource' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <table  className={styles.table}>
      <tr  className={styles.tr}>
      <th  className={styles.th}></th>
        <th  className={styles.th}>カテゴリー</th>
 
      
        <th  className={styles.th}>タイトル</th>
        <th  className={styles.th}>更新日</th>
        <th  className={styles.th}>完了者</th>
      </tr>
      <tr  className={styles.tr}>
      <td  className={styles.td}><input type="checkbox" /></td>
        <td  className={styles.td}>セル</td>
        <td  className={styles.td}>表の中の１つ１つの項目</td>
        <td  className={styles.td}>2021/11/3</td>
        <td  className={styles.td}><div className={styles.image}>< img src="https://m.media-amazon.com/images/I/31pcfgVRTZL._AC_.jpg" alt="sample" className={styles.img} /></div></td>
      </tr>
    </table>
    </div>
    
  );
};

export default Resource;