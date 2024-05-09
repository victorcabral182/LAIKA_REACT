interface IMenuNavProps {
  activeMenuItem: number | null
  scrollTo: (value: number) => void
}

export const MenuNav = ({ activeMenuItem, scrollTo }: IMenuNavProps) => {
  return (
    <>
      <nav className={`hidden lg:flex gap-[32px] font-bold text-lg pr-4`}>
        <div
          onClick={() => scrollTo(1)}
          className={`${
            activeMenuItem === 1 ? "text-[#C6EFAB]" : "text-white"
          } p-2 cursor-pointer hover:text-[#3D71B7]`}
        >
          S.L.D.S.E.M.A.N
        </div>
        <div
          onClick={() => scrollTo(2)}
          className={`${
            activeMenuItem === 2 ? "text-[#C6EFAB]" : "text-white"
          } p-2 cursor-pointer hover:text-[#3D71B7]`}
        >
          VÍDEOS
        </div>
        <div
          onClick={() => scrollTo(3)}
          className={`${
            activeMenuItem === 3 ? "text-[#C6EFAB]" : "text-white"
          } p-2 cursor-pointer hover:text-[#3D71B7]`}
        >
          LETRAS
        </div>
        <div
          onClick={() => scrollTo(4)}
          className={`${
            activeMenuItem === 4 ? "text-[#C6EFAB]" : "text-white"
          } p-2 cursor-pointer hover:text-[#3D71B7]`}
        >
          CONTATO
        </div>
      </nav>
    </>
  )
}
