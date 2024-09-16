"use client";
import Image from "next/image";
import Header from "@/components/Header";
import Link from "next/link";
import { userHeaderData } from "@/types/userHeaderData";
import { useState } from "react";
import SkillTest from "@/components/SkillTest";
const userData: userHeaderData = {
  username: "Pradeep SN",
  userProfilePicUrl: "/assets/userProfile.jpeg",
};
export default function Home() {
  const [curPage, setCurpage] = useState("SkillTest");
  const [testData, setTestData] = useState({
    rank: 0,
    percentile: 0,
    score: 0,
  });
  console.log(testData.percentile, testData.rank, testData.score);
  return (
    <div className="w-[100%]">
      <div className="">
        <Header userData={userData}></Header>
      </div>
      <div className="w-[100%] flex flex-row">
        <div className="pt-8 w-[170px] h-[160vh] flex flex-col border-r-2">
          <div
            className={`cursor-pointer m-1 p-2 rounded-md pl-4 flex flex-row ${
              curPage === "Dashboard"
                ? "bg-[#d5d5db] text-[#4845cc]"
                : "bg-[#FFFFFF] text-black"
            }`}
            onClick={() => setCurpage("Dashboard")}
          >
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-[20px] "
              >
                <path
                  fill={curPage === "Dashboard" ? "#4845cc" : "#000000"}
                  d="M160 80c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-352zM0 272c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48L0 272zM368 96l32 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48z"
                />
              </svg>
            </div>
            <p className="block pl-3">Dashboard</p>
          </div>
          <div
            className={`cursor-pointer m-1 p-2 rounded-md pl-4 flex flex-row ${
              curPage === "SkillTest"
                ? "bg-[#d5d5db] text-[#4845cc]"
                : "bg-[#FFFFFF] text-black"
            }`}
            onClick={() => setCurpage("SkillTest")}
          >
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-[20px]"
              >
                <path
                  fill={curPage === "SkillTest" ? "#4845cc" : "#000000"}
                  d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0L133.9 0c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0L487.4 0C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z"
                />
              </svg>
            </div>
            <p className="block pl-3">Skill Test</p>
          </div>
          <div
            className={`cursor-pointer m-1 p-2 rounded-md pl-4 flex flex-row ${
              curPage === "Internship"
                ? "bg-[#d5d5db] text-[#4845cc]"
                : "bg-[#FFFFFF] text-black"
            }`}
            onClick={() => setCurpage("Internship")}
          >
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-[20px]"
              >
                <path
                  fill={curPage === "Internship" ? "#4845cc" : "#000000"}
                  d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l224 0 0-112c0-26.5 21.5-48 48-48l112 0 0-224c0-35.3-28.7-64-64-64L64 32zM448 352l-45.3 0L336 352c-8.8 0-16 7.2-16 16l0 66.7 0 45.3 32-32 64-64 32-32z"
                />
              </svg>
            </div>
            <p className="block pl-3">Internship</p>
          </div>
        </div>
        <div>
          {curPage === "SkillTest" ? (
            <SkillTest testData={testData} setTestData={setTestData} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
