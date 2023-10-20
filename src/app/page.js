import Image from "next/image";
import styles from "./page.module.css";
import theme from './theme/themeConfig';
import { Button, ConfigProvider, Space, Typography } from 'antd';
import { TwitterOutlined } from '@ant-design/icons';

import { Account, Provider } from "starknet";

const { Title, Text, Link } = Typography;

export default function Home() {
  return (
    <ConfigProvider theme={theme}>
      <main className={styles.main}>
        <div className={styles.center}>
          <Image src="/logo.svg" alt="Logo" width={224} height={150} priority />
        </div>
        <Space align="center" direction="vertical" size='large'>
          <Button type="primary" size="large" shape="round" icon={<TwitterOutlined />}>Sign In with Twitter</Button>
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
    </ConfigProvider>
  );
}
