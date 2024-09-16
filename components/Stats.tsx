import Image from "next/image";
export default function Stats(props: any) {
  return (
    <div className="flex flex-col">
      <p className="block font-bold m-2">Quick Statistics</p>
      <div className="flex flex-row">
        <div className="flex flex-row w-[33%] border-r-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            fill="orange"
            className="w-[50px] h-[45px] m-3 p-2 bg-gray-200 rounded-full"
          >
            <path d="M400 0L176 0c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8L24 64C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9L192 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-26.1 0C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24L446.4 64c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112l84.4 0c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6l84.4 0c-5.1 66.3-31.1 111.2-63 142.3z" />
          </svg>
          <div className="flex flex-col justify-center">
            <p className="font-bold">{props.testData.rank}</p>
            <p className="text-sm">Your Rank</p>
          </div>
        </div>
        <div className="flex flex-row w-[33%] border-r-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="grey"
            className="w-[50px] h-[45px] m-3 p-2 bg-gray-200 rounded-full"
          >
            <path d="M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z" />
          </svg>
          <div className="flex flex-col justify-center">
            <p className="font-bold">{props.testData.percentile}</p>
            <p className="text-sm">Percentile</p>
          </div>
        </div>
        <div className="flex flex-row w-[33%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="green"
            className="w-[50px] h-[45px] m-3 p-2 bg-gray-200 rounded-full"
          >
            <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
          </svg>
          <div className="flex flex-col justify-center">
            <p className="font-bold">{props.testData.score}/15</p>
            <p className="text-sm">Correct Answers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
