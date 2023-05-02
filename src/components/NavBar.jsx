import Link from "next/link";
import React from "react";
import Image from "next/image";

function NavBar() {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" width={50} height={50} />
      </div>

      <Link href="/">Home</Link>
      <Link href="/users">Users List</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}

export default NavBar;
