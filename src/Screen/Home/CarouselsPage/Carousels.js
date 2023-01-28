import Carousel from 'react-bootstrap/Carousel';
import FirstPage from './Pages/FirstPage';
import SecondPage from './Pages/SecondPage';
import ThirdPage from './Pages/ThirdPage';
import FourthPage from './Pages/FourthPage';

const Carousels = () => {
  return (
    <Carousel variant="dark">
      <Carousel.Item interval={1500}>
        <FirstPage />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <SecondPage />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <ThirdPage />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <FourthPage />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;