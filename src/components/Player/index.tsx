export const Player = ({ url }: any) => {
  return (
    <>
      <iframe
        width="100%"
        height="315"
        src={url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </>
  )
}
