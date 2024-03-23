import React from "react";
import Image from "next/image";
import "./globals.css";
import backgroundImage from "../../public/images/landingPage/background_large.jpg";

export default function Home() {
  return (
    <main>
      <Image className="background-img" src={backgroundImage} />
      <div>
        <h1 className="title">Paintify</h1>
      </div>
    </main>
  );
}
