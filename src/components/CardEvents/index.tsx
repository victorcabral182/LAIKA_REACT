interface CardEventsProps {
  data: string
  local: string
  hora: string
  evento: string
}

export const CardEvents = ({ data, local, hora, evento }: CardEventsProps) => {
  return (
    <>
      <div className="bg-[#E8E7E7] w-[70%] h-[142px] flex flex-col justify-center items-center">
        <h1>{data}</h1>
        <h1>{evento} </h1>
        <h1>{local} </h1>
        <h1>{hora}</h1>
      </div>
    </>
  );
};
