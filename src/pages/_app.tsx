import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "./components/footer";
import SearchAppBar from "./components/header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SearchAppBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
