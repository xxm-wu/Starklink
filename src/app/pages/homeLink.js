'use client';

import Image from "next/image";
import { TwitterOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Space, Typography } from 'antd';
import { TwitterApi } from 'twitter-api-v2';

import styles from "./page.module.css";

const { Title, Paragraph, Text, Link } = Typography;
function Login() {
  const twitterLogin = async () => {
    const twitterClient = new TwitterApi({
      appKey: process.env.CONSUMER_TOKEN,
      appSecret: process.env.CONSUMER_SECRET,
    });

    const authUrl = await twitterClient.generateAuthLink('http://localhost:3000/');
    window.location.href = authUrl;
  };
  return <Button type="primary" size="large" shape="round" icon={<TwitterOutlined />} onClick={twitterLogin}>Sign In with Twitter</Button>;
}

export default function HomeLink() {
  return (
    <main className={styles.main}>

      <div className={styles.center}>
        <Image src="/logo.svg" alt="Logo" width={224} height={150} priority />
      </div>
      <Space align="center" direction="vertical" size='large'>
        <Login />
        <h1>The marketplace for your friends.</h1>
        <p></p>
        <Space>
          <a
            href="https://twitter.com"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          > Twitter <span>-&gt;</span>

          </a>

          <a
            href="https://discord.com/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord <span>-&gt;</span>
          </a>

          <a
            href=""
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram <span>-&gt;</span>
          </a>

          <a
            href=""
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            Doc <span>-&gt;</span>
          </a>
        </Space>
        <p></p>
        <div className={styles.description}>
          Powered by
          <a
            href="https://www.starknet.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/starknet.svg"
              alt="Starknet Logo"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </Space>


    </main>
  );
}