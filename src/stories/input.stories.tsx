import {ChangeEvent, useRef, useState} from "react";

export default {
    title: 'input'
}

export const UncontrolledInput = () => <input/>
export const ControlledInput = () => <input value={'it-incubator.by'}/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')

    const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value
        setValue(actualValue)
    }

    return(
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

    return(
        <> <input ref={inputRef}/> <button onClick={onClickSaveHandler}>Save</button> - actual value: {value} </>
    )
}