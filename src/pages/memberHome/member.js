import './App.scss';
import Header from '../../components/memberComponents/header'
import Middle from '../../components/middle';
import Carousel from '../../components/img-carousel';

function Member() {
  return (
    <>
      <Header />
      <Middle />
      <Carousel />
    </>
  );
}

export default Member;