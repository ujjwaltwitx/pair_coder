import CodeEditorComponent from "../components/codeEditorComponent";
import CodeRunnerComponent from "../components/codeRunnerComponent";
import ProblemDescritptionComponent from "../components/problemDescriptionComponent";

export default function HomePage() {
  return (
    <div className="flex flex-no-wrap h-full gap-4">
      <div className="basis-1/2">
        <ProblemDescritptionComponent />
      </div>
      <div className="basis-1/2 flex flex-col gap-4">
        <div className="">
          <CodeEditorComponent />
        </div>
        <div className="flex-grow">
          <CodeRunnerComponent />
        </div>
      </div>
    </div>
  );
}
