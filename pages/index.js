import Head from "next/head";
import Abt from "./Abt";

export default function Home() {
  return (
    <>
      <Head>
        <title> Emmanuel Abiodun || Home</title>
      </Head>
      <header className="header">
        <h3>
          {" "}
          <span className="hello">Hello! </span>
          My name is Emmanuel, and I&apos;m a <br /> <span className="duty" />
        </h3>
        <div className="desk">
          <Abt />
        </div>
      </header>
      <div className="main">
        <h2>Want to Know about Emmanuel?</h2>
        <Abt />
      </div>
    </>
  );
}
