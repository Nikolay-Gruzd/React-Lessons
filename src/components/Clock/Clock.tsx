import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView.tsx";
import {AnalogClockView} from "./AnalogClockView.tsx";

type Props = {
    mode: 'digital' | 'analog'
}

export const Clock: React.FC<Props> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, []);

    let view
    switch (props.mode) {
        case 'digital':
            view = <DigitalClockView date={date} />
            break
        case 'analog':
            view = <AnalogClockView date={date} />
            break
    }

    return (
        <div>
            {view}
        </div>
    )
};

export type ClockViewProps = {
    date: Date;
}