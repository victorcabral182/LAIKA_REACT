import { AiOutlineMenu } from "react-icons/ai"; 
import Image from "next/image"
import logo from "../../assets/imagens/logo.svg"

export const Header = () => {
    return (
        <>
            <header className="w-full h-[75px] bg-[#E8E7E7] flex justify-between items-center px-2 ">
                <Image src={logo} alt="laika" />   
                <AiOutlineMenu size={25}/> 

            </header>
        </>
    )
} 