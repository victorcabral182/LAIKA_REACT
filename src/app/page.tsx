import { Header } from '@/components/Header'
import Image from 'next/image'
import capa from "../assets/imagens/Capa.png"
import { Sociais } from '@/components/Sociais'

export default function Home() {
  return (
    <>
      <Header />
      <Image className='w-full' src={capa} alt="" />
      <Sociais/>
    </>
  )
}
