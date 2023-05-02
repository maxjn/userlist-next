import React from "react";
import Head from "next/head";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map(({ id }) => {
    return { params: { id: id.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const id = params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { user: data },
  };
};

function UserSingle({ user }) {
  return (
    <>
      <Head>
        <title>User list | {user.name}</title>
      </Head>
      <div>
        <h1>{user.name}</h1>
        <p>{user.username}</p>
        <p>{user.email}</p>
        <p>{user.address.city}</p>
      </div>
    </>
  );
}

export default UserSingle;
