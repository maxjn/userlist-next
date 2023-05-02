import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";

function RootLayout({ children }) {
  return (
    <div className="content">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}

export default RootLayout;
