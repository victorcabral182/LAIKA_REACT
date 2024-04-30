import Image from "next/image"
import capaNevoeiro from "../../assets/imagens/capa-nevoeiro.jpg"

export const FirstContent = () => {
  return (
    <>
      <Image
        src={capaNevoeiro}
        alt="capa nevoeiro"
        className="w-[35%] drop-shadow-lg -rotate-[3deg] hover:rotate-0 mt-16"
      />
      <button className="bg-[#575959] py-4 px-6 text-lg font-bold uppercase text-[#E8E7E7] mt-">
        Ouça agora
      </button>
    </>
  )
}
