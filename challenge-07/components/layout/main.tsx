import Head from "next/head";
import Navigation from "../navigation";

const Main = ({ children, router }) => {
  return (
    <>
      <Head>
        <title>COBA</title>
      </Head>
        <Navigation />
      <div className="main">{children}</div>
    </>
  );
};

export default Main;
