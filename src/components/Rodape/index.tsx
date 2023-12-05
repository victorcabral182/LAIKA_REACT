import { AiOutlineInstagram } from "react-icons/ai";
import React from "react";
import Image from "next/image";
import et from "../../assets/imagens/et.png";
import Link from "next/link";

const Rodape = () => {
  return (
    <footer className="w-full flex justify-between items-center h-[75px] bg-[#575959] md:px-[2%] lg:px-[10%]">
      <Image src={et} alt="et" width={60} height={60} />
      <Link href={"https://www.instagram.com/laikanoespaco/"}>
        <AiOutlineInstagram size={30} className="flex items-center ml-11  " />
      </Link>
      <div className="p-3">
        <p className="text-sm text-[#E8E7E7] text-left">
          &copy; 2023 Laika no Espaço
        </p>
        <p className="text-[10px] text-[#E8E7E7] text-right">
          {" "}
          Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};

export default Rodape;
