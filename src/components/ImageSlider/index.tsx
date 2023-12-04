import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Image from "next/image";
import laika1 from "../../assets/imagens/laika1.png";
import laika2 from "../../assets/imagens/laika2.png";
import laika3 from "../../assets/imagens/laika3.png";

function ImageSlider() {
  const items = [
    <Image
      key={1}
      className="w-full max-h-[380px] md:max-h-[614px]"
      src={laika1}
      alt="laika"
    />,
    <Image
      key={2}
      className="w-full max-h-[380px] md:max-h-[614px]"
      src={laika2}
      alt="laika2"
    />,
    <Image
      key={3}
      className="w-full max-h-[380px] md:max-h-[614px]"
      src={laika3}
      alt="laika3"
    />,
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
