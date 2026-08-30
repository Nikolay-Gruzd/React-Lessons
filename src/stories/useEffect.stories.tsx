import {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const UseEffectExample = () => {
    console.log('Example useEffect')
    const [counter, setCounter] = useState(1)

    document.title = counter.toString()

    // Examples !!!
    // api.getUsers().then('') запрос на сервер side effect
    // setInterval
    // indexedDB
    // document.getElementId
    // document.title = 'User '

    useEffect(() => {
        console.log('useEffect every time render')
        document.title = counter.toString()
    }
    );

    useEffect(() => {
        console.log('useEffect only time render')
        document.title = counter.toString()
    }, []);

    useEffect(() => {
        console.log('useEffect first render and every time counter change')
        document.title = counter.toString()
    }, [counter]);

    return (
        <>
            Hello {counter}
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </>
    )
}

export const SetTimeoutExample = () => {
    console.log('SetTimeOutExample')

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {
        // setTimeout(() => {
        //     console.log('setTimeout')
        //     document.title = counter.toString()
        // }, 1000)

        setInterval(() => {
            console.log('setInterval')
            setCounter(counter + 1)
        }, 1000)
    }, [counter]);



    return (
        <>
            Hello, counter: {counter} - fake: {fake}
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setFake(fake + 1)}>+++</button>
        </>
    )
}

export const watchExample = () => {
    console.log('watchExample')

    const [hours, setHours] = useState(16)
    const [minutes, setMinutes] = useState(59)
    const [seconds, setSeconds] = useState(50)

    useEffect(() => {
        setInterval(() => {
            setSeconds(seconds + 1)
            if (seconds === 59) {
                setSeconds(0)
            }
        }, 1000)
    }, [seconds]);

    useEffect(() => {

    }, [minutes]);



    return (
        <>
            Time: {hours}:{minutes}:{seconds}
        </>
    )
}