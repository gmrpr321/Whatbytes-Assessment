import React from "react";

export default function Analysis(props: any) {
  return (
    <div className="p-6">
      <h1 className="text font-bold mb-6">Syllabus Wise Analysis</h1>
      <div className="mb-6">
        <div className=" ">HTML Tools,Forms,History</div>
        <div className="flex items-center">
          <div className="flex-grow mr-4">
            <div className="relative h-4 rounded-full overflow-hidden bg-blue-100">
              <div
                className="absolute top-0 left-0 h-full rounded-full bg-blue-600"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
          <span className="font-semibold  text-blue-600">75%</span>
        </div>
      </div>
      <div className="mb-6">
        <div className=" ">Tags & References in HTML</div>
        <div className="flex items-center">
          <div className="flex-grow mr-4">
            <div className="relative h-4 rounded-full overflow-hidden bg-yellow-100">
              <div
                className="absolute top-0 left-0 h-full rounded-full bg-yellow-600"
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>
          <span className="font-semibold  text-yellow-600">60%</span>
        </div>
      </div>
      <div className="mb-6">
        <div className=" ">Tables and References in HTML</div>
        <div className="flex items-center">
          <div className="flex-grow mr-4">
            <div className="relative h-4 rounded-full overflow-hidden bg-red-100">
              <div
                className="absolute top-0 left-0 h-full rounded-full bg-red-600"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>
          <span className="font-semibold  text-red-600">85%</span>
        </div>
      </div>
      <div className="mb-6">
        <div className=" ">Tables & CSS Basics</div>
        <div className="flex items-center">
          <div className="flex-grow mr-4">
            <div className="relative h-4 rounded-full overflow-hidden bg-green-100">
              <div
                className="absolute top-0 left-0 h-full rounded-full bg-green-600"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
          <span className="font-semibold  text-green-600">90%</span>
        </div>
      </div>
    </div>
  );
}
