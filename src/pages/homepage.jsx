import CodeEditorComponent from "../components/codeEditorComponent";
import CodeRunnerComponent from "../components/codeRunnerComponent";
import ProblemDescritptionComponent from "../components/problemDescriptionComponent";

export default function HomePage() {
  return (
    <div className="columns-2 gap-4">
      <div className="">
        <ProblemDescritptionComponent />
      </div>
      <div className="flex-col">
        <div className="flex-grow">
          <CodeEditorComponent />
        </div>
        <div className="flex-grow">
          <CodeRunnerComponent />
        </div>
      </div>
    </div>
  );
}
