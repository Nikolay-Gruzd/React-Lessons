import React, {useEffect, useState} from "react";
import "./Clock.css"

type Props = {

}

export const Clock: React.FC<Props> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(()=>{
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, []);

    const getDateString = (num: number) => num < 10 ? "0" + num : num

    return (
        <div>
            <span>{getDateString(date.getHours())}</span>
            :
            <span>{getDateString(date.getMinutes())}</span>
            :
            <span>{getDateString(date.getSeconds())}</span>

            <div>
                <RoundClock />
            </div>
        </div>
    )
}

export const RoundClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    // Расчет углов поворота стрелок (в градусах)
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const hrPosition = (hours % 12) * 30 + minutes * 0.5;
    const minPosition = minutes * 6 + seconds * 0.1;
    const secPosition = seconds * 6;

    return (
        <div className="clock-container">
            <div className="clock-face">
                {/* Стрелки часов */}
                <div
                    className="hand hour-hand"
                    style={{ transform: `rotate(${hrPosition}deg)` }}
                />
                <div
                    className="hand minute-hand"
                    style={{ transform: `rotate(${minPosition}deg)` }}
                />
                <div
                    className="hand second-hand"
                    style={{ transform: `rotate(${secPosition}deg)` }}
                />
                {/* Центральная точка */}
                <div className="center-dot" />
            </div>
        </div>
    );
}