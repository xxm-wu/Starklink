
'use client';

import { Account, Provider } from "starknet";
import Image from "next/image";
import { Button, ConfigProvider, Space, Typography, Layout } from 'antd';
import styles from "./page.module.css";
import { connect, disconnect } from '@argent/get-starknet'
import { useState } from 'react';


const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text, Link } = Typography;

export default function HomeWallet() {
    const [account, setAccount] = useState('');
    const connectWallet = async () => {
        const connection = await connect({
            modalWalletAppearance: "all"
        });
        const account = connection.account;
        setAccount(account);
    };
    const connectContract = async () => {
        // initialize provider
        const provider = new Provider({ sequencer: { baseUrl: "http://127.0.0.1:5050" } });
        // initialize existing account
        const privateKey = process.env.OZ_NEW_ACCOUNT_PRIVKEY;
        const accountAddress = "0x051158d244c7636dde39ec822873b29e6c9a758c6a9812d005b6287564908667";
        const account = new Account(provider, accountAddress, privateKey);
        console.log(account);
    };
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Content className={styles.main}>
                <Space align="center" direction="vertical" size='large'>
                    <Image src="/logo.svg" alt="Logo" width={224} height={150} priority />
                    <Button type="primary" size="large" shape="round" onClick={connectWallet}>Login to Start</Button>
                    <Title>Account: {account}</Title>

                    <Title>Connect starknet user & assets</Title>
                </Space>
            </Content>
            <Footer>
                <Space>
                    <Text>Powered by</Text>
                    <Link href="https://www.starknet.io/" target="_blank">
                        <Image
                            src="/starknet.svg"
                            alt="Starknet Logo"
                            width={100}
                            height={24}
                            priority
                        />
                    </Link>
                </Space>
            </Footer>
        </Layout>
    );
}