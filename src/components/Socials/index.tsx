import { AiFillAmazonCircle } from "react-icons/ai";
import { FaDeezer } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
import { BsSpotify } from "react-icons/bs";
import Link from "next/link";
export const Socials = () => {
  return (
    <>
      <div className="bg-[#3D71B7] h-[56px] flex justify-center items-center gap-[32px] ">
        <Link
          href={
            "https://open.spotify.com/intl-pt/artist/1V81UUTh3efUS7WWoyvuB9"
          }
        >
          <BsSpotify size={30} className="motion-safe:animate-pulse  " />
        </Link>
        <Link
          href={"https://music.apple.com/br/album/constante-single/1657053408"}
          target="_blank"
        >
          <BsApple size={30} className="motion-safe:animate-pulse " />
        </Link>

        <Link
          href={"https://www.deezer.com/br/album/381894197"}
          target="_blank"
        >
          <FaDeezer size={30} className="motion-safe:animate-pulse " />
        </Link>

        <Link
          href={
            "https://music.amazon.com/albums/B0BNM267QC?ref=dm_ff_featurefm&tag=featurefmbr-20"
          }
          target="_blank"
        >
          <AiFillAmazonCircle
            size={30}
            className="motion-safe:animate-pulse "
          />
        </Link>
      </div>
    </>
  );
};
