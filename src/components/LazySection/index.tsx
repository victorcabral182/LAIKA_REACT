import { LyricsContent } from "../LyricsContent"

interface ILazySectionProps {
  lyricsRef: any
  contactRef: any
}

export const LazySection = ({ lyricsRef, contactRef }: ILazySectionProps) => {
  const handleWhatsapp = () => {
    const phoneNumber = "+5527996658616"
    window.open(`https://web.whatsapp.com/send?phone=${phoneNumber}`)
  }
  return (
    <>
      <section
        ref={lyricsRef}
        className="boxParallax bg3 flex flex-col justify-center items-center"
      >
        <h3 className="text-[72px] xl:text-[144px] mb-4 font-semibold uppercase text-[#E8E7E7] select-none">
          LETRAS
        </h3>
      </section>
      <section className="text-[#1B1C1C] bg-[#E8E7E7] py-20 px-4 md:px-16 lg:px-[74px] xl:px-[144px] 2xl:px-[432px] flex flex-col justify-between gap-8">
        <LyricsContent />
      </section>
      <section
        ref={contactRef}
        className="boxParallax bg4 flex flex-col justify-center items-center"
      >
        <h3 className="text-[72px] xl:text-[144px] mb-4 font-semibold uppercase text-[#E8E7E7] select-none">
          Contato
        </h3>
        <div className="flex flex-col gap-8 lg:justify-center lg:items-center p-4 lg:p-16 bg-transparent backdrop-blur-lg w-fit lg:w-[35%] rounded-2xl lg:rounded-full">
          <div className="flex flex-col lg:flex-row gap-2 text-[#E8E7E7] font-semibold text-xl cursor-text">
            <span className="select-none">E-mail:</span>
            <span className="font-normal">laikanoespaco2@gmail.com</span>
          </div>
          <div
            className="flex flex-col lg:flex-row gap-2 text-[#E8E7E7] font-semibold text-xl cursor-pointer"
            onClick={handleWhatsapp}
          >
            <span className="select-none">WhatsApp:</span>
            <span className="font-normal">+55 (27) 99665-8616</span>
          </div>
        </div>
      </section>
    </>
  )
}
