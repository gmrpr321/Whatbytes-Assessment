import Mark from "./Mark";
import Stats from "./Stats";
import Graph from "./Graph";
import Analysis from "./Analysis";
import QuestionAnalysis from "./QuestionAnalysis";

export default function SkillTest(props: any) {
  return (
    <div className="p-5 flex flex-col ">
      <p>
        {" "}
        <b> Skill Test </b>
      </p>
      <div className="flex flex-col md:flex-row">
        <div className="mr-4">
          <div className="border-2 w-[60vw]  md:w-[45vw] h-[20vh] mt-4 rounded-md">
            <Mark setTestData={props.setTestData}></Mark>
          </div>
          <div className="border-2 w-[60vw]  md:w-[45vw] h-[25vh] mt-4 rounded-md">
            <Stats testData={props.testData}></Stats>
          </div>
          <div className="border-2 w-[60vw]  md:w-[45vw] h-[80vh] mt-4 rounded-md">
            <Graph userPercentile={props.testData.percentile}></Graph>
          </div>
        </div>
        <div>
          <div className="border-2 w-[60vw]  md:w-[33vw] h-[70vh] mt-4 rounded-md">
            <Analysis></Analysis>
          </div>
          <div className="border-2 w-[60vw]  md:w-[33vw] h-[70vh] mt-4 rounded-md">
            <QuestionAnalysis
              userMark={props.testData.score}
            ></QuestionAnalysis>
          </div>
        </div>
      </div>
    </div>
  );
}
