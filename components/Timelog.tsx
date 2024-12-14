"use client";
import { useState } from "react";

const Timelog = () => {
  const [userInput, setUserInput] = useState<string>("");
  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  return (
    <div>
      <form>
        <input type="text" value={userInput} onChange={handleUserInput} />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
};

export default Timelog;
