import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Chip,
  CircularProgress,
} from "@nextui-org/react";

export default function QuestionAnalysis(props: any) {
  return (
    <div className="flex flex-col p-6">
      <div className="flex justify-between">
        <p>
          <b>Question Analysis</b>
        </p>
        <p>
          <b>{props.userMark}/52</b>
        </p>
      </div>
      <div>
        <p className="mt-1">
          You scored {props.userMark} questions correct out of 15. However, it
          still needs some improvements.
        </p>
      </div>
      <div className="flex items-center justify-center mt-8">
        <Card className="w-[240px] h-[240px] border-none relative">
          <CardBody className="justify-center items-center pb-0 relative">
            <div className="relative flex justify-center items-center w-full h-full">
              <CircularProgress
                classNames={{
                  svg: "w-36 h-36 drop-shadow-md",
                  indicator: "stroke-blue-600",
                  track: "stroke-blue-100",
                  value: "text-3xl font-semibold text-white",
                }}
                value={(props.userMark / 15) * 100}
                strokeWidth={4}
                showValueLabel={true}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="absolute w-12 h-12 text-white"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <path d="M256 0c17.7 0 32 14.3 32 32l0 10.4c93.7 13.9 167.7 88 181.6 181.6l10.4 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-10.4 0c-13.9 93.7-88 167.7-181.6 181.6l0 10.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-10.4C130.3 455.7 56.3 381.7 42.4 288L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l10.4 0C56.3 130.3 130.3 56.3 224 42.4L224 32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6l0-20.6c0-17.7 14.3-32 32-32s32 14.3 32 32l0 20.6c58.3-12.5 104.1-58.4 116.6-116.6L384 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l20.6 0C392.1 165.7 346.3 119.9 288 107.4l0 20.6c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-20.6C165.7 119.9 119.9 165.7 107.4 224l20.6 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-20.6 0zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
              </svg>
            </div>
          </CardBody>
          <CardFooter className="justify-center items-center pt-0">
            <Chip
              classNames={{
                base: "border-1 border-white/30",
                content: "text-white/90 text-small font-semibold",
              }}
              variant="bordered"
            >
              2800 Data points
            </Chip>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
