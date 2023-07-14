import "../styles/globals.css";
import Layout from "../components/Layout";
import { ThemeProvider } from "next-themes";

function MyApp(props) {
  const { Component, pageProps } = props;
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
