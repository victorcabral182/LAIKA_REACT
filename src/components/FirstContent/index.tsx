import Image from "next/image"
import capaNevoeiro from "../../assets/imagens/capa-nevoeiro.jpg"

export const FirstContent = () => {
  return (
    <>
      <Image
        priority
        src={capaNevoeiro}
        alt="capa nevoeiro"
        width={300}
        height={300}
        className="transition-all duration-75 ease-in-out w-[75%] md:w-[60%] lg:w-[50%] xl:w-[45%] 2xl:w-[32.5%] drop-shadow-lg -rotate-[3deg] hover:rotate-0 mt-16 cursor-pointer"
      />
      <button className="transition-all duration-300 ease-in-out bg-[#575959] py-4 px-6 text-lg font-bold uppercase text-[#E8E7E7] hover:bg-[#8381BD] hover:text-[#1B1C1C]">
        Ouça agora
      </button>
    </>
  )
}
