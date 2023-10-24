import { AiFillAmazonCircle } from "react-icons/ai";
import { FaDeezer } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
import { BsSpotify } from "react-icons/bs";
import Link from "next/link";
export const Sociais = () => {
    return (
        <>
            <div className="bg-[#3D71B7] h-[56px] flex justify-center items-center gap-[32px] " >
                <Link href={"https://open.spotify.com/intl-pt/artist/1V81UUTh3efUS7WWoyvuB9"}>
                    <BsSpotify size={30} />
                </Link>
                <Link href={"https://music.apple.com/br/album/constante-single/1657053408"}>
                    <BsApple size={30} />
                </Link>

                <Link href={"https://www.deezer.com/br/album/381894197"}>
                    <FaDeezer size={30} />
                </Link>

                <Link href={"https://music.amazon.com/albums/B0BNM267QC?ref=dm_ff_featurefm&tag=featurefmbr-20"}>
                    <AiFillAmazonCircle size={30} />

                </Link>

            </div>
        </>
    )
}