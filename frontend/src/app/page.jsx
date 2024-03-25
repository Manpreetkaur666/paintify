import React from "react";
import Image from "next/image";
import "./globals.css";
import backgroundImage from "../../public/images/landingPage/background_large.jpg";
import Login from "./components/Login";

export default function Home() {
  return (
    <main>
      <Image className="background-img" src={backgroundImage} />
      <div className="absolute top-20 left-20">
        <h1 className="absolute z-10 top-20 left-20 text-9xl font-black text-white font-sans">
          Paintify
        </h1>
      </div>
      <Login />
    </main>
  );
}
