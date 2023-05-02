import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Users.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { users: data },
  };
};

function Users({ users }) {
  return (
    <>
      <Head>
        <title>User list | Users</title>
      </Head>
      <div>
        <h1>User List</h1>
        {users.map(({ id, name }) => (
          <div className={styles.single}>
            <Link href={`/users/${id}`}>
              <h3>{name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Users;
