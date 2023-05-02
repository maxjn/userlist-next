import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>User list | 404</title>
      </Head>
      <div className="not-found">
        <h1>Oooooops....</h1>
        <p>The page that you're looking for doesn't exist.</p>
        <p>
          Back to <Link href="/">Home Page ...</Link>
        </p>
      </div>
    </>
  );
}

export default NotFound;
