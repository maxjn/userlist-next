import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>User list | Home</title>
        <meta name="description" content="Showing users list" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, odio
          cumque et maxime atque excepturi labore quae, tenetur delectus minima
          itaque est nostrum ad doloremque praesentium sed ut blanditiis hic.{" "}
        </p>
        <p className={styles.text}>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, odio
          cumque et maxime atque excepturi labore quae, tenetur delectus minima
          itaque est nostrum ad doloremque praesentium sed ut blanditiis hic.{" "}
        </p>
        <Link href="/users" className={styles.btn}>
          See Users List
        </Link>
      </main>
    </>
  );
}
