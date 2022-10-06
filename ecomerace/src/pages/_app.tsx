import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "../redux/store/store";
import Header from "../components/Header/index";
import Appbar from "../components/appbar";
import ProductBar from "../components/productBar/index";
import Footer from "../components/Footer/index";
import {useSelector} from 'react-redux'
import {InitialProps} from '../redux/reducer/reducer'
import AdminPanel from './admin_panal/index'
function MyApp({ Component, pageProps }: AppProps) {
  const selector =useSelector((state:InitialProps)=>state)
  console.log("🚀 ~ file: _app.tsx ~ line 12 ~ MyApp ~ selector", selector)
  return (
    <>
      {/* {selector.email=='admin'?<AdminPanel />:<div className="flex flex-col justify-between h-screen">
        <div>
          <Appbar />
          <Header />
          <ProductBar />
        </div>
        <div> */}
          <Component {...pageProps} />
        {/* </div>
        <div>
          <Footer />
        </div>
      </div>} */}
    </>
  );
}

export default wrapper.withRedux(MyApp);
