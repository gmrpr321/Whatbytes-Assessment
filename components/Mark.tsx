import { useState } from "react";
import Image from "next/image";

export default function Mark(props: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const [rank, setRank] = useState(0);
  const [percentile, setPercentile] = useState(0);
  const [score, setScore] = useState(0);
  console.log(rank, percentile, score);
  return (
    <div className="h-[100%] flex flex-row relative">
      <div className="w-[15%] h-[100%] border-2 border-r border-white">
        <div className="flex items-center justify-center">
          <Image
            src="/assets/htmllogo.png"
            alt="logo"
            className="mt-[15px] ml-[0%]"
            width={60}
            height={60}
          />
        </div>
      </div>
      <div className="w-[65%] h-[100%] border-2 flex flex-col border-r border-white">
        <p className="block mt-4">Hyper Text Markup Language</p>
        <p className="block mb-4 text-[12px]">
          Questions : 08 | Duration : 15 mins | Submitted on 5 June 2021{" "}
        </p>
      </div>
      <div className="w-[20%] h-[100%] border-2 flex items-center justify-center border-r border-white">
        <button
          className="bg-blue-800 hover:bg-blue-400 text-white py-2 px-4 rounded w-[80%] text-[70%] border-l border-white"
          onClick={toggleModal}
        >
          Update
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white w-[80%] md:w-[50%] lg:w-[40%] p-6 rounded-md shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Update Scores</h2>

            <div className="flex flex-col space-y-4">
              <div className="flex flex-row items-center">
                <p className="text-white bg-violet-500 rounded-xl border-2 w-[28px] h-[25px] flex items-center justify-center mr-2">
                  1
                </p>
                <label className="w-[90%] text-sm">Update Your Rank </label>
                <input
                  type="text"
                  className="border-2 p-2 flex-grow w-[20%]"
                  onChange={() => setRank(event?.target.value)}
                />
              </div>
              <div className="flex flex-row items-center">
                <p className="text-white bg-violet-500 rounded-xl border-2 w-[28px] h-[25px] flex items-center justify-center mr-2">
                  2
                </p>
                <label className="w-[90%] text-sm">
                  Update Your Percentile{" "}
                </label>
                <input
                  type="text"
                  className="border-2 p-2 flex-grow w-[20%]"
                  onChange={() => setPercentile(event?.target.value)}
                />
              </div>
              <div className="flex flex-row items-center">
                <p className="text-white bg-violet-500 rounded-xl border-2 w-[28px] h-[25px] flex items-center justify-center mr-2">
                  3
                </p>
                <label className="w-[90%] text-sm">
                  Update Your current Score (out of 15){" "}
                </label>
                <input
                  type="text"
                  className="border-2 p-2 flex-grow w-[20%]"
                  onChange={() => setScore(event?.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-end space-x-2 mt-6">
              <button
                className="bg-gray-500 text-white py-2 px-4 rounded"
                onClick={toggleModal}
              >
                Cancel
              </button>
              <button
                className="bg-blue-800 text-white py-2 px-4 rounded"
                onClick={() => {
                  toggleModal();
                  props.setTestData({ rank, percentile, score });
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
