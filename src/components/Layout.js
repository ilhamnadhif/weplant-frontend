import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
