import { useState } from "react";

function reallyHardTask(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

interface Process {
  id: string;
  states: string[];
}

export default function ProcessB() {
  const [process, setProcess] = useState<Process>({
    id: "foo",
    states: ["Not Started"],
  });

  const execute = async () => {
    const localStates = ["Started:"];
    setProcess((state) => ({ ...state, states: localStates }));

    localStates.push("Subprocess 1");
    setProcess((state) => ({ ...state, states: localStates }));
    await reallyHardTask(2000);

    localStates.push("Subprocess 2");
    setProcess((state) => ({ ...state, states: localStates }));
    await reallyHardTask(2000);

    throw Error("Execution ran out of batteries");
  };

  const handleExecution = async () => {
    try {
      await execute();
    } catch (e) {
      setProcess((prevProcess) => {
        return ({ ...prevProcess, states: [...prevProcess.states, `${e}`] })
      })
    }
  };

  return (
    <>
      <ul>
        {process.states.map((state, index) => (
          <li key={index}>{state}</li>
        ))}
      </ul>
      <button onClick={handleExecution}>Start Execution</button>
    </>
  );
};