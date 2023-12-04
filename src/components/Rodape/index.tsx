import React from "react";
import Image from "next/image";
import et from "../../assets/imagens/et.png";

const Rodape = () => {
  return (
    <footer className="w-full flex justify-between items-center h-[75px] bg-[#575959] md:px-[2%]">
      <Image src={et} alt="et" width={60} height={60} />
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
