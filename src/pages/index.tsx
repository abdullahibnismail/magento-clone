import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";
import Login from "../components/login/Login";

const Home: NextPage = () => {
  useEffect(() => {
    // axios.get('http://localhost:3000/api/hello').then((res)=>{
    //   console.log(res.data)
    // })
    let obj = {
      name: "akbar",
      ph: 30122,
    };
    axios.post("http://localhost:3000/api/post", obj).then((res) => {
      console.log(res.data);
    });
  }, []);
  return (
    <>
      {/* <Login /> */}
    </>
  );
};

export default Home;
