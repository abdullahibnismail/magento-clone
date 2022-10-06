import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "../services/redux/store/store";
import Header from "../components/Header/index";
import Appbar from "../components/Appbar";
import ProductBar from "../components/productBar/index";
import Footer from "../components/Footer/index";
import {useSelector} from 'react-redux'
import {InitialProps} from '../services/redux/reducer/reducer'
import AdminPanel from './admin_panal/index'
import Admin from "./admin_panal/index";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter().pathname
  return (
    <>
    
        {router.includes('admin_panal')?(
          <Admin/>
        ):(
          <>

          <Appbar />
          <Header />
          <ProductBar />
          </>
        )}
          <Component {...pageProps} />
   
          <Footer />
       
      
    </>
  );
}

export default wrapper.withRedux(MyApp);
