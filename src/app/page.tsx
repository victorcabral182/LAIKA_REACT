"use client"

import Image from "next/image"
import img from "../assets/imagens/IMG_7032.jpg"
import capaNevoeiro from "../assets/imagens/capa-nevoeiro.jpg"
import React, { useRef } from "react"
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax"

export default function Home() {
  const parallax = useRef<IParallax>(null!)
  return (
    <>
      <div className="w-full h-full">
        <div className="boxParallax bg1 flex flex-col justify-center items-center gap-6">
          <Image
            src={capaNevoeiro}
            alt="capa nevoeiro"
            className="w-[35%] drop-shadow-lg -rotate-[3deg] hover:rotate-0 mt-16"
          />
          <button className="bg-[#575959] py-4 px-6 text-lg font-bold uppercase text-[#E8E7E7] mt-">
            Ouça agora
          </button>
        </div>
        <div className="text-[#E8E7E7] bg-[#3D71B7] text-justify py-20 px-40 flex flex-col gap-4">
          <h3 className="text-center text-[24px] mb-4 font-semibold">
            LANÇAMENTO - EP#2
          </h3>
          <p className="text-lg">
            Laika no Espaço é uma banda formada em Vila Velha/ES em 2018, com a
            proposta de fazer um som melódico transitando entre o emo e o indie,
            na linha de bandas como Turnover, Citizen e Terno Rei.
          </p>
          <p className="text-lg">
            Após um período em hiato, o grupo passou por reestruturações e hoje
            apresenta uma nova formação, que incorpora três guitarras e synth.
            Compõem a banda Bernardo Amorim (guitarra e voz), Felipe Dias (baixo
            e voz), Mylena Kobi (bateria), Victor Cabral (guitarra e voz) e
            Vitor Toledo (guitarra e synth).
          </p>
          <p className="text-lg">
            Passado o lançamento do EP "Constante" em 2022, que marcou o retorno
            da banda e conquistou espaço no cenário local, Laika no Espaço volta
            agora com um novo EP intitulado "Sobre lembranças do sol em meio ao
            nevoeiro".
          </p>
          <p className="text-lg">
            Composto por 4 faixas, o EP explora uma sonoridade mais diversa e
            etérea, usufruindo ao máximo de harmonias, texturas e timbres, e
            criando diálogos com outros estilos, como o shoegaze e o dreampop.
          </p>
        </div>
        <div className="boxParallax bg2 "></div>
        <div className="text-[#777] bg-[#8381BD] text-justify p-20">
          <h3>Parallax</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quae
            ullam nisi! Quis corrupti maxime quo esse dignissimos sunt commodi
            aut perspiciatis tempora dolores accusamus, ad vitae accusantium
            nobis ut.
          </p>
        </div>
        <div className="boxParallax bg3"></div>
        <div className="text-[#777] bg-[#8381BD] text-justify p-20">
          <h3>Parallax</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quae
            ullam nisi! Quis corrupti maxime quo esse dignissimos sunt commodi
            aut perspiciatis tempora dolores accusamus, ad vitae accusantium
            nobis ut.
          </p>
        </div>
        <div className="boxParallax bg4"></div>
      </div>
    </>
  )
}
