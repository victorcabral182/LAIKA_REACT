"use client";

import { Player } from "@/components/Player";

export default function Videos() {
  const videosList = [
    {
      id: 1,
      url: "https://www.youtube.com/embed/0nFten1JIwo?si=kX8oORLAyvI0l3Ks",
    },
    {
      id: 2,
      url: "https://www.youtube.com/embed/dgUVEIYqUTA?si=GWG9JQJMvHIdtYiZ",
    },
    {
      id: 3,
      url: "https://www.youtube.com/embed/IEqwMu4HT98?si=p61CKOAvGkM2CaFH",
    },
    {
      id: 4,
      url: "https://www.youtube.com/embed/LH2CU1MYkIc?si=XlGiNEI5OqOukAI6",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-4 bg-[#1B1C1C] p-4 md:px-[10%] md:py-[32px]">
        {videosList.map((item) => (
          <Player key={item.id} url={item.url} />
        ))}
      </div>
    </>
  );
}
