import React from "react";
import {ClockViewProps} from "./Clock.tsx";
import styles from "./AnalogClockView.module.css";

export const AnalogClockView: React.FC<ClockViewProps> = ({date}) => {

    // return <span>Analog</span>

    // Расчет углов поворота стрелок (в градусах)
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hrPosition = (hours % 12) * 30 + minutes * 0.5;
    const minPosition = minutes * 6 + seconds * 0.1;
    const secPosition = seconds * 6;

    return <div className={styles['clock-face']}>
        {/* Стрелки часов */}
        <div
            className={`${styles.hand} ${styles['hour-hand']}`}
            style={{transform: `rotate(${hrPosition}deg)`}}
        />
        <div
            className={`${styles.hand} ${styles['minute-hand']}`}
            style={{transform: `rotate(${minPosition}deg)`}}
        />
        <div
            className={`${styles.hand} ${styles['second-hand']}`}
            style={{transform: `rotate(${secPosition}deg)`}}
        />
        {/* Центральная точка */}
        <div className={styles['center-dot']}/>
    </div>
}