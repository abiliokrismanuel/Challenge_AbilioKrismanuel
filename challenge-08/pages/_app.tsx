import "../styles/globals.css";
import Layout from "../components/layout/main";

function MyApp({ Component, pageProps}) {
  return (
      <Component {...pageProps} />
  );
}

export default MyApp;
