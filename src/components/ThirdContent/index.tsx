import { ReactNode } from "react"

interface IVideoSectionProps {
  url: string
  title: ReactNode
  description: ReactNode
}

export const VideoSection = ({
  url,
  title,
  description,
}: IVideoSectionProps) => {
  return (
    <section className="flex flex-col justify-center xl:flex-row xl:justify-between gap-4 xl:gap-8 items-center mb-8">
      <div className="w-full">
        <iframe
          className="w-[90vw] md:w-[75vw] lg:w-[50vw] h-[calc(100vw/1.5)] md:h-[calc(75vw/1.5)] lg:h-[calc(50vw/1.5)] 2xl:w-[35vw] 2xl:h-[calc(35vw/1.5)] mx-auto"
          width="560"
          height="315"
          src={url}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </div>
      <div className="flex flex-col gap-6">
        {title}
        {description}
      </div>
    </section>
  )
}
