import "../styles/globals.css";
import Layout from "../components/Layout/main";

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout router={router}>
      <Component {...pageProps} key={router.route} />
    </Layout>
  );
}

export default MyApp;
