function ChipComponent(props) {
  return (
    <div className="h-10 px-6 border-solid border-2 border-white  rounded-full me-2 my-3 flex justify-center text-[16px] font-semibold items-center">
      {props.text}
    </div>
  );
}

function TestCaseExample(props) {
  return (
    <div className="my-2">
      <p className="text-[18px]">Example {props.count}:</p>
      <div className="border-l-2 px-4 py-2 my-2  bg-slate-950">
        <p className="text-[18px] text-white ">Input:</p>
        <p className="text-[16px] text-slate-400 ">
          nums = [3,4,5,6,7], target = 8
        </p>
        <p className="text-[18px] text-white">Output:</p>
        <p className="text-[16px] text-slate-400 ">[3,4]</p>
      </div>
    </div>
  );
}

function Constraints(props) {
  return (
    <div className="text-[16px] px-5">
      <ul className="list-disc">
        <li>0 &lt;= nums.length &lt;= 10**5</li>
        <li>0 &lt;= nums.length &lt;= 10**5</li>
        <li>0 &lt;= nums.length &lt;= 10**5</li>
      </ul>
    </div>
  );
}

export default function ProblemDescritptionComponent() {
  return (
    <div className="bg-slate-800 text-white px-5 py-3 flex text-left overflow-auto rounded-lg h-full">
        <div className="text-2xl font-medium">
          34. Find the first and the last element in an Array
          <div className="flex flex-wrap">
            <ChipComponent text="DP" />
            <ChipComponent text="Binary Search" />
          </div>
          <div className="text-[16px] text-sky-400 bg-cyan-900 p-2 rounded-lg mt-2">
            Given an array of integers nums sorted in non-decreasing order, find
            the starting and ending position of a given target value. If target
            is not found in the array, return [-1, -1]. You must write an
            algorithm with O(log n) runtime complexity.
          </div>
          <TestCaseExample count="5" />
          <TestCaseExample count="2" />
          <TestCaseExample count="3" />
          <Constraints />
        </div>
      </div>
  );
}
