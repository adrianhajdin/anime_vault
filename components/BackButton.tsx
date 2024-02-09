"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import BackwardIcon from "@/public/back.svg";

function BackButton() {
  const router = useRouter();

  return (
    <Image
      src={BackwardIcon}
      width={40}
      height={40}
      alt="Back"
      className="p-2 cursor-pointer"
      onClick={() => router.back()}
    />
  );
}

export default BackButton;
