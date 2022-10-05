import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "../redux/store/store";
import Header from "../components/Header/index";
import Appbar from "../components/appbar";
import ProductBar from "../components/productBar/index";
import Footer from "../components/Footer/index";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="flex flex-col justify-between h-screen">
        <div>
          <Appbar />
          <Header />
          <ProductBar />
        </div>
        <div>
          <Component {...pageProps} />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default wrapper.withRedux(MyApp);
