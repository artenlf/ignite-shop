import Image from "next/image";

import { useKeenSlider } from 'keen-slider/react';

import 'keen-slider/keen-slider.min.css';
import { HomeContainer, Product } from "../styles/pages/home";

import productImage1 from '../assets/Shirt/1.png';
import productImage2 from '../assets/Shirt/2.png';
import productImage3 from '../assets/Shirt/3.png';



export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })
  return (
    <HomeContainer ref={sliderRef} className='keen-slider'>
      <Product className="keen-slider__slide">
        <Image src={productImage1} alt="" width={520} height={480} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 99,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={productImage2} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 99,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={productImage2} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 99,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={productImage3} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 99,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
