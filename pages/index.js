import Header from '../components/LoginComponent/Header/header'
import Carousel from "../components/LoginComponent/carousel/carousel";
import About from '../components/about'
import News from '../components/news'
import Network from '../components/network'
import Serve from '../components/serveComponent/index'
import Team from '../components/TeamComponent/index'
import Footer from '../components/LoginComponent/footer/footer'
import React from 'react';
import axios from 'axios'

function LoginPage() {
    const [info , setInfo] = React.useState(null)
    var userInfo = [] 
    React.useEffect(()=>{
        axios.get('http://192.168.31.163:3000/getUserInfo?tel='+919876543215).then((res) => {
            userInfo = res.data.data[0]
            console.log(userInfo)
            setInfo(userInfo)
        })
    },[])
    return (
        
        <>
            <Header 
                userInfo = {info}
            />
            <Carousel />
            <About />
            <Serve />
            <Team />
            <News />
            <Footer />
        </>
    );
}

export default LoginPage;