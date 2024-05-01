import Image from "next/image"
import capaNevoeiro from "../../assets/imagens/capa-nevoeiro.jpg"

export const FirstContent = () => {
  return (
    <>
      <Image
        src={capaNevoeiro}
        alt="capa nevoeiro"
        className="transition-all duration-75 ease-in-out w-[35%] drop-shadow-lg -rotate-[3deg] hover:rotate-0 mt-16"
      />
      <button className="transition-all duration-300 ease-in-out bg-[#575959] py-4 px-6 text-lg font-bold uppercase text-[#E8E7E7] hover:bg-[#8381BD] hover:text-[#1B1C1C]">
        Ouça agora
      </button>
    </>
  )
}
