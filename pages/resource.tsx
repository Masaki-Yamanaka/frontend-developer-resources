import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../styles/Resource.module.scss';
import { CreateResourceInput, CreateResourceMutation } from "../src/API";
import { API } from "aws-amplify";
import { createResource } from "../src/graphql/mutations";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { useRouter } from "next/dist/client/router";
const Resource: NextPage = () => {
 
  const  makeResourceData= async () => {
    try {
      const createInput: CreateResourceInput = {
        categoryId: "1",
        userId: "1",
        title: "タイトル1",
        url: "https://qiita.com/cryptobox/items/6db66421b75520ff86a8",
      };

      const request = (await API.graphql({
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        query: createResource,
        variables: {
          input: createInput,
        },
      })) as { data: CreateResourceMutation; errors: any[] };
    } catch ({ errors }) {
      console.error(...errors);
      throw new Error(errors[0].message);
    }
  }
  useEffect(()=>{
    makeResourceData()
  })
  return (
    <div>
      <Head>
        <title>Resource</title>
        <meta name='description' content='Resource' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <table  className={styles.table}>
      <tbody>
      <tr className={styles.tr}>
      <th className={styles.th}></th>
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
      </tbody>
    </table>
    </div>
    
  );
};

export default Resource;