import {ChangeEvent, useRef, useState} from "react";

export default {
    title: 'input'
}

export const UncontrolledInput = () => <input/>
export const ControlledInputWithFixedValue = () => <input value={'it-incubator.by'}/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')

    const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value
        setValue(actualValue)
    }

    return (
        <> <input value={value} onChange={onChangeValueHandler}/> - {value} </>
    )
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const onClickSaveHandler = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return (
        <> <input ref={inputRef}/>
            <button onClick={onClickSaveHandler}>Save</button>
            - actual value: {value} </>
    )
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')

    const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={onChangeValueHandler}/>
}

export const ControlledCheckBox = () => {
    const [parentValue, setParentValue] = useState(true)

    const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return <input type={'checkbox'} checked={parentValue} onChange={onChangeValueHandler}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('1')

    const onChangeValueHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return (
        <select value={parentValue} onChange={onChangeValueHandler}>
            <option>none</option>
            <option value={'1'}>Minsk</option>
            <option value={'2'}>Moscow</option>
            <option value={'3'}>Kiev</option>
        </select>
    )
}