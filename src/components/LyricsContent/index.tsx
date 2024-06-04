"use client"

import { useState } from "react"

interface ILyricsContentState {
  name: string | undefined
  isOpen: boolean | undefined
}

export const LyricsContent = () => {
  const [lyricState, setLyricState] = useState<ILyricsContentState>({
    isOpen: false,
    name: "",
  })

  const handleClick = (name: string) => {
    if (name === lyricState.name) {
      setLyricState({ isOpen: false, name: "" })
    } else {
      setLyricState({ isOpen: true, name: name })
    }
  }

  const titleList = [
    {
      name: "Distância",
      lyric: (
        <p className="pt-2 text-[18px]">
          Hoje acordei e olhei pro seu lado
          <br />
          Percebi que nem tudo é assim
          <br />
          A sensação de sufoco em seus olhos
          <br />
          Não vou deixar...
          <br />
          Que vá embora...
          <br />
          Não vou deixar...
          <br />
          Eu sei, que não devemos nada a ninguém
          <br />
          O quanto mal já nos fizemos
          <br />
          Prometo que isso vai passar
          <br />
          Não se pode recomeçar sem um fim
          <br />
          E não posso parar de respirar
          <br />
          Só pra pensar em você
          <br />
          Não vou deixar...
          <br />
          Que vá embora...
          <br />
          Não vou deixar...
          <br />
          Que vá embora...
          <br />
        </p>
      ),
    },
    {
      name: "Neblina",
      lyric: (
        <p className="pt-2 text-[18px]">
          Vou caminhar pelos trilhos
          <br />
          Sentindo essa neblina, fugindo dos meus erros
          <br />
          E os anos se passam...
          <br />
          E os dias estão cada vez mais curtos...
          <br />
          E os anos se passam...
          <br />
          E os dias estão cada vez mais curtos...
          <br />
          Vou tentar te explicar
          <br />
          Porque as flores já não nascem mais aqui
          <br />
          E os nossos dias estão cada vez mais curtos
          <br />
          Cada vez mais curtos...
          <br />
          E os anos se passam...
          <br />
          E os dias estão cada vez mais curtos...
          <br />
          E os anos se passam...
          <br />
        </p>
      ),
    },
    {
      name: "Q.I.E.M.E",
      lyric: (
        <p className="pt-2 text-[18px]">
          Eu preciso de acreditar
          <br />
          Um pouco mais, um pouco mais...
          <br />
          Dizer que está tudo bem
          <br />
          Já não faz tão bem
          <br />
          Dois ou três minutos
          <br />
          Esperando o trem passar
          <br />
          Já não faz sentido
          <br />
          Já não faz sentido algum
          <br />
          Não posso mais estar perdido junto com a solidão
          <br />
          Ou em suas mãos, ou em suas mãos...
          <br />
          Dizer que está tudo bem
          <br />
          Já não faz tão bem
          <br />
          Dois ou três minutos
          <br />
          Esperando o trem passar
          <br />
          Já não faz sentido
          <br />
          Já não faz sentido algum
        </p>
      ),
    },
    {
      name: "Singela",
      lyric: (
        <p className="pt-2 text-[18px]">
          Não consigo dizer
          <br />
          Me dê um pouco mais
          <br />
          Cidade singela
          <br />
          Me diz como é feito?
          <br />
          O que é tão perfeito?
          <br />
          E outra vez eu perdi as horas
          <br />
          Onde foi parar você?
          <br />
          Gira girassol, aonde se meteu?
          <br />
          O que aconteceu?
          <br />
          Depois de tanto se cobrar
          <br />
          Mereço atenção, um pouco de atenção
          <br />
          Os trechos que me levam a você
          <br />
          Entre traços e laços eu pude perceber
          <br />
          Melhor do que você
          <br />
          E outra vez eu perdi as horas
          <br />
          Onde foi parar você?
          <br />
          Gira girassol, aonde se meteu?
          <br />
          O que aconteceu?
          <br />
          Depois de tanto se cobrar
          <br />
          Mereço atenção, um pouco de atenção
          <br />
        </p>
      ),
    },
    {
      name: "Pior noite do mês",
      lyric: (
        <p className="pt-2 text-[18px]">
          Me pego olhando pra você
          <br />
          Eu não sei bem o que dizer
          <br />
          Acordo pensando em como te encontrar
          <br />
          Essa noite estou disposto a te levar
          <br />
          Essa noite estou disposto a te levar
          <br />
          Eu não me importo se a chuva não parar
          <br />
          Eu não me importo se a chuva não parar
          <br />
          Sei que o corte é fundo, sei que posso me mudar
          <br />
          Sei que o corte é fundo, sei que posso me mudar
          <br />
          As luzes não se apagam pra me manter de pé
          <br />
          Como é estar perdido e sem direção?
          <br />
          Sentir saudade de algo que nunca teve
        </p>
      ),
    },
    {
      name: "Aperto",
      lyric: (
        <p className="pt-2 text-[18px]">
          Não pude deixar de notar em seu rosto
          <br />
          As dores que a vida iria lhe dar
          <br />
          Se eu me transformasse em tudo ou mais
          <br />
          Será que eu, será que eu...
          <br />
          Veria luz, seria luz
          <br />
          Te mostrei outro dia
          <br />
          Que ninguém precisa se encaixar
          <br />
          Que nós temos que nos aceitar
          <br />
          Pude ver da janela a luz do sol
          <br />
          E pensar que nem sempre estamos sós
          <br />
          Veria luz, seria luz
          <br />
          Veria a luz passando por mim mesmo?
        </p>
      ),
    },
    {
      name: "O dia ainda não acabou",
      lyric: (
        <p className="pt-2 text-[18px]">
          Calma, o dia ainda não acabou
          <br />
          Nunca foi tão fácil me manter aqui
          <br />
          Quem sabe um dia eu volte a acreditar
          <br />
          Quando seus olhos não me demonstrarem mais
          <br />
          Quem sabe ao ver eu venha me calar
          <br />
          Hoje eu não quero estar aqui
          <br />
          Brincando com o sentimento
          <br />
          Andando sem direção
          <br />
          Eu já não posso mais
          <br />
          Me perder no tempo
          <br />
          Então diga olá
          <br />
          Para si mesmo
          <br />
          Quem sabe um dia eu volte a acreditar
          <br />
          Quando seus olhos não me demonstrarem mais
          <br />
          Quem sabe ao ver eu venha me calar
          <br />
          Hoje eu não quero estar aqui
        </p>
      ),
    },
  ]

  return (
    <>
      {titleList.map((e) => {
        return (
          <div key={e.name}>
            <p
              onClick={() => handleClick(e.name)}
              style={{ borderBottom: "1px solid #1B1C1C" }}
              className="text-[24px] xl:text-[32px] font-bold uppercase"
            >
              {e.name}
            </p>
            {lyricState.isOpen && lyricState.name === e.name && e.lyric}
          </div>
        )
      })}
    </>
  )
}
