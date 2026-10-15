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

export const SetIntervalExample = () => {
    console.log('SetTimeOutExample')

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {

        const intervalId = setInterval(() => {
            console.log('setInterval')
            setCounter(counter + 1)
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [counter]);


    return (
        <>
            Hello, counter: {counter} - fake: {fake}
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setFake(fake + 1)}>+++</button>
        </>
    )
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)

    console.log("Rendered ResetEffectExample: " + counter)

    useEffect(() => {
        console.log('Effect occurred: ' + counter)

        return () => {
            console.log('----------- RESET EFFECT ----------- ' + counter)
        }
    }, [counter])

    const increment = () => {
        setCounter(counter + 1)
    }

    return (
        <>
            Hello, counter: {counter}
            <button onClick={increment}>+</button>
        </>
    )
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState('')

    console.log("Rendered KeysTrackerExample: " + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }

        window.document.addEventListener('keypress', handler)

        return () => {
            window.document.removeEventListener('keypress', handler)
        }
    }, [text])

    return (
        <>
            Typed text: {text}
        </>
    )
}

export const SetTimeoutExample = () => {
    const [text, setText] = useState('')

    useEffect(() => {

        const timeoutId = setTimeout(() => {
            console.log("TIMEOUT EXPIRED")
            setText('3 seconds passed')
        }, 3000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [text])

    return (
        <>
            Typed text: {text}
        </>
    )
}