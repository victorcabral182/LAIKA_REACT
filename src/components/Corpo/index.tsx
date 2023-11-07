import React from "react";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image';
import { imageOptimizer } from "next/dist/server/image-optimizer";
import laika1 from "../../assets/imagens/laika1.png"
import laika2 from "../../assets/imagens/laika2.png"
import laika3 from "../../assets/imagens/laika3.png"


function ImageSlider() {
  const items = [
    <Image className="w-full max-h-[380px]" src={laika1} alt="laika" />,
    <Image className="w-full max-h-[380px]" src={laika2} alt="laika2" />,
    <Image className="w-full max-h-[380px]" src={laika3} alt="laika3" />,
  ];

  return (
    <AliceCarousel
      items={items}
      mouseTracking
      autoPlay
      animationType="fadeout"
      autoPlayInterval={3000}
      infinite
      disableButtonsControls
      disableDotsControls
      
    />
  );
}
export default ImageSlider;



