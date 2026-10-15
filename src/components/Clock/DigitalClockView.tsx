import React from "react";
import {ClockViewProps} from "./Clock.tsx";

export const DigitalClockView: React.FC<ClockViewProps> = ({date}) => {
    const getDateString = (num: number) => num < 10 ? "0" + num : num

    return <>
        <span>{getDateString(date.getHours())}</span>
        :
        <span>{getDateString(date.getMinutes())}</span>
        :
        <span>{getDateString(date.getSeconds())}</span>
    </>
}