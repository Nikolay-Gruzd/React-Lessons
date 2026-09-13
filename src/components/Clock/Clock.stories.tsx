import {Clock} from "./Clock.tsx";

export default {
    title: 'Clock',
    component: Clock,
}

export const BaseExample = () => {
    return <Clock />
}

// export const RoundClockExample = () => {
//     return <RoundClock />
// }

// export const watchExample = () => {
//     console.log('watchExample')
//
//     const [hours, setHours] = useState(16)
//     const [minutes, setMinutes] = useState(59)
//     const [seconds, setSeconds] = useState(50)
//
//     useEffect(() => {
//         setInterval(() => {
//             setSeconds(seconds + 1)
//             if (seconds === 59) {
//                 setSeconds(0)
//             }
//         }, 1000)
//     }, [seconds]);
//
//     useEffect(() => {
//
//     }, [minutes]);
//
//
//
//     return (
//         <>
//             Time: {hours}:{minutes}:{seconds}
//         </>
//     )
// }