import { userHeaderData } from "@/types/userHeaderData";
import Image from "next/image";
interface HeaderProps {
  userData: userHeaderData;
}

export default function Header({ userData }: HeaderProps) {
  const { username, userProfilePicUrl } = userData;

  return (
    <div className="h-[15vh] w-full bg-white pt-2 display flex flex-row justify-between items-center  border-b-2">
      <div className="w-[20%] h-full flex justify-around items-center ml-2">
        <Image src="/assets/logo.png" alt="Logo" width={175} height={28} />
      </div>
      <div className="p-2 mr-10 display flex flex-row items-center border border black">
        <Image
          src={userProfilePicUrl}
          alt={"Profile Pic"}
          width={25}
          height={10}
          className="rounded-full mr-2"
        ></Image>
        <p className="text-black-500 font-semibold">{username}</p>
      </div>
    </div>
  );
}
