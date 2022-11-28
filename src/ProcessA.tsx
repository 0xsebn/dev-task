import { useState } from "react";

function reallyHardTask(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function ProcessA() {
    const [executionState, setExecutionState] = useState<string[]>([
        "Not Started",
    ]);

    const executeProcess = async () => {
        const localExecutionStates = ["Started:"];
        setExecutionState(localExecutionStates);

        setExecutionState(executionState => [...executionState, "Subprocess 1"]);
        console.log("Subprocess 1");
        await reallyHardTask(2000);

        setExecutionState(executionState => [...executionState, 'Subproccess 2']);
        console.log("Subprocess 2");
        await reallyHardTask(2000);

        setExecutionState(executionState => [...executionState, 'Subproccess 3']);
        console.log("Subprocess 3");
        await reallyHardTask(2000);
        setExecutionState(executionState => [...executionState, 'Done']);
        console.log("Done");
    };

    return (
        <>
            <ul>
                {executionState.map((state, index) => (
                    <li key={index}>{state}</li>
                ))}
            </ul>
            <button onClick={executeProcess}>Start Execution</button>
        </>
    );
};