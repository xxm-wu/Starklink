import Image from "next/image";
import styles from "./page.module.css";

import { Account, Provider } from "starknet";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div></div>
        <div>
          <a
            href="https://www.starknet.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <Image
              src="/starknet.svg"
              alt="Starknet Logo"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image src="/logo.svg" alt="Logo" width={448} height={299} priority />
      </div>

      <button className="button">Sign In</button>
      <h1>The marketplace for your friends.</h1>

      <div className={styles.grid}>
        <a
          href="https://twitter.com"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Twitter <span>-&gt;</span>
          </h2>
          <p></p>
        </a>

        <a
          href="https://discord.com/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Discord <span>-&gt;</span>
          </h2>
          <p></p>
        </a>

        <a
          href=""
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Telegram <span>-&gt;</span>
          </h2>
          <p></p>
        </a>

        <a
          href=""
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Doc <span>-&gt;</span>
          </h2>
          <p></p>
        </a>
      </div>
    </main>
  );
}
