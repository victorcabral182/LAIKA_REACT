export const ThirdContent = () => {
  return (
    <>
      <div className="w-full">
        <iframe
          className="w-[90vw] md:w-[75vw] lg:w-[50vw] h-[calc(100vw/1.5)] md:h-[calc(75vw/1.5)] lg:h-[calc(50vw/1.5)] 2xl:w-[35vw] 2xl:h-[calc(35vw/1.5)] mx-auto"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/0nFten1JIwo?si=rtxH140kMVq-JFXT"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </div>
      <div className="flex flex-col gap-6">
        <p className="text-[#575959] text-base lg:text-lg font-bold">
          Clipe oficial da música &quot;Pior Noite do Mês&quot;, do EP
          &quot;Constante&quot;, lançado em 2022.
        </p>
        <p className="hidden xl:flex text-[#575959] text-base xl:text-lg">
          FICHA TÉCNICA: Roteiro e direção: Daniel Bones Produção: Victor Cabral
          Elenco: Yasmin Toretta, Thiago Cordeiro, Mayara Maria Identidade
          visual: Nathany Less Edição: Daniel Bones Produtora: DanielBones
          Produções
        </p>
        <p className="hidden xl:flex text-[#575959] text-base xl:text-lg">
          Laika no Espaço: Bernardo Amorim, Felipe Dias, Victor Cabral, Vitor
          Toledo e Mylena Kobi
        </p>
      </div>
    </>
  )
}
