interface IMenuNavMobileProps {
  isOpen: boolean
  activeMenuItem: number | null
  scrollTo: (value: number) => void
  setIsOpen: () => void
}

export const MenuNavMobile = ({
  activeMenuItem,
  isOpen,
  scrollTo,
  setIsOpen,
}: IMenuNavMobileProps) => {
  return (
    <nav
      className={`fixed xl:hidden z-30 left-0 top-0 flex flex-col gap-8 items-center justify-center bg-[#1B1C1C] w-[100vw] h-[100vh] transition-all duration-500 ease-in-out ${
        !isOpen ? "top-[-2500px]" : "top-0"
      }`}
    >
      <div
        onClick={() => {
          scrollTo(1)
          setIsOpen()
        }}
        className={`${
          activeMenuItem === 1 ? "text-[#C6EFAB]" : "text-white"
        } p-2 cursor-pointer hover:text-[#3D71B7] text-[24px] font-semibold`}
      >
        S.L.D.S.E.M.A.N
      </div>
      <div
        onClick={() => {
          scrollTo(2)
          setIsOpen()
        }}
        className={`${
          activeMenuItem === 2 ? "text-[#C6EFAB]" : "text-white"
        } p-2 cursor-pointer hover:text-[#3D71B7] text-[24px] font-semibold`}
      >
        VÍDEOS
      </div>
      <div
        onClick={() => {
          scrollTo(3)
          setIsOpen()
        }}
        className={`${
          activeMenuItem === 3 ? "text-[#C6EFAB]" : "text-white"
        } p-2 cursor-pointer hover:text-[#3D71B7] text-[24px] font-semibold`}
      >
        LETRAS
      </div>
      <div
        onClick={() => {
          scrollTo(4)
          setIsOpen()
        }}
        className={`${
          activeMenuItem === 4 ? "text-[#C6EFAB]" : "text-white"
        } p-2 cursor-pointer hover:text-[#3D71B7] text-[24px] font-semibold`}
      >
        CONTATO
      </div>
    </nav>
  )
}
