import { CardEvents } from "@/components/CardEvents";

export default function Tour() {
  const shows = [
    {
      id: 1,
      title: "Festival prato da casa",
      description: "",
      locaation: "Vitoria/ES - UFES",
      dateHour: new Date(2023, 10, 25, 17, 30, 0),
    },
    {
      id: 2,
      title: "Festival do vitor",
      description: "",
      locaation: "Vitoria/ES - UFES",
      dateHour: new Date(2023, 10, 25, 17, 30, 0),
    },
    {
      id: 3,
      title: "Festival arroz",
      description: "",
      locaation: "Vitoria/ES - UFES",
      dateHour: new Date(2023, 10, 25, 17, 30, 0),
    },
    {
      id: 4,
      title: "Festival banana",
      description: "",
      locaation: "Vitoria/ES - UFES",
      dateHour: new Date(2023, 10, 25, 17, 30, 0),
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center bg-[#E8E7E7]  p-[38px] h-[100vh]">
        <h1 className=" mb-4 uppercase font-bold flex justify-center items-center h-9 w-32 bg-[#3D71B7]">
          Tour Dates
        </h1>
        {shows.map((show) => {
          return (
            <CardEvents
              key={show.id}
              data={show.dateHour.toLocaleDateString()}
              evento={show.title}
              hora={show.dateHour.toLocaleTimeString()}
              local={show.locaation}
            />
          );
        })}
      </div>
    </>
  );
}
