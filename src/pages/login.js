import Header from "../components/LoginComponent/Header/header";
import Carousel from "../components/LoginComponent/carousel/carousel";
import Footer from "../components/LoginComponent/footer/footer";
// import Header from '../components/sections/PageTop'
import { useRouter } from 'next/router';

function Login(props) {
    const { page, site } = props;
    const router = useRouter();

    return (
        <>
            <Header />
            <Carousel />
            <Footer />
        </>
    );
}

export default Login;
