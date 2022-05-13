import Header from '../components/LoginComponent/Header/header'
import Carousel from "../components/LoginComponent/carousel/carousel";
import About from '../components/about'
import News from '../components/news'
import Serve from '../components/serveComponent/index'
import Team from '../components/TeamComponent/index'
import Footer from '../components/LoginComponent/footer/footer'
import Copyright from '../components/Copyright'

function LoginPage() {
    return (
        
        <>
            <Header />
            <Carousel />
            <About />
            <Serve />
            <Team />
            <News />
            <Footer />
            <Copyright />
        </>
    );
}

export default LoginPage;