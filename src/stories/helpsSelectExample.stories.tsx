import {Select} from "../components/Select/Select.tsx";
import {useMemo, useState} from "react";

export default {
    title: 'Helps to select React.memo',
}

type ItemType = {
    title: string
    country: string
    people: number
    value: any
}

export const HelpsToSelectReactMemoExample1 = () => {
    console.log('Select')
    // debugger

    const [items, setItems] = useState<ItemType[]>([
        {title: 'Minsk', country: 'RB', people: 1000, value: 1},
        {title: 'Moscow', country: 'RUS', people: 10000, value: 2},
        {title: 'Kiev', country: 'UK', people: 100, value: 3}
    ])

    const [counter, setCounter] = useState<number>(0)

    const example1 = useMemo(()=>{
        console.log('Example 1')
        return items.filter( i => i.title.toLowerCase().indexOf('s') > -1 )
    }, [items])

    const example2 = useMemo(()=>{
        console.log('Example 2')
        return items.filter( i => i.country === 'RB' || i.country === 'UK' )
    }, [items])

    const example3 = useMemo(()=>{
        console.log('Example 3')
        return items.filter( i => i.people <= 1000 )
    }, [items])

    // const example1 = () => {
    //     console.log('Example 1')
    //     const newArray = items.filter( i => i.title.toLowerCase().indexOf('s') > -1 )
    //     return newArray
    // }
    // const example2 = () => {
    //     console.log('Example 2')
    //     return items.filter( i => i.country === 'RB' || i.country === 'UK' )
    // }
    // const example3 = () => {
    //     console.log('Example 3')
    //     return items.filter( i => i.people <= 1000 )
    // }

    // const res1 = example1()
    // const res2 = example2()
    // const res3 = example3()

    const res1 = example1
    const res2 = example2
    const res3 = example3

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <div>{counter}</div>
            <Select onChange={()=>{}} items={res1} />
            <Select onChange={()=>{}} items={res2} />
            <Select onChange={()=>{}} items={res3} />
        </>
    )
}