import {useEffect, useState, useRef} from "react";

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

