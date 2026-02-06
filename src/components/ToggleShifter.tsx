import Shifter from './Shifter.tsx';
import { useEffect, useState } from "react";

export default function ToggleShifter() {
  const [isShowingShifter, setShowingShifter] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "s") {
        setShowingShifter(prev => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {isShowingShifter && <Shifter />}
    </>
  );
}
