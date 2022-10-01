import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

type Props = {
  children?: React.ReactNode;
};

const GlobalLayout: React.FC<Props> = ({ children }) => {
  return (
    <div
      id="canvas"
      className="min-h-screen flex flex-col bg-icco-darkest text-icco-white-90"
    >
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default GlobalLayout;
