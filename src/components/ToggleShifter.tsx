import Shifter from './Shifter.tsx';
import { useState } from "react";

export default function ToggleShifter() {
    const [isShowingShifter, setShowingShifter] = useState(false);

    return (
        <>
            {isShowingShifter && (
                <Shifter />
            )}
        </>
    )
}
