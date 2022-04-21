import Header from '../components/HomeComponent/header/header'
import Advantage from '../components/HomeComponent/advantage/advantage';
import Footer from '../components/HomeComponent/footer/footer';
import News from '../components/HomeComponent/news/news';
import Product from '../components/HomeComponent/product/product';
import SecurityModule from '../components/HomeComponent/securityModule/securityModule';

function HomePage() {
    return(
        <>
            <Header />
            <SecurityModule />
            <Advantage />
            <Product />
            <News />
            <Footer />
        </>
    );
}

export default HomePage;
