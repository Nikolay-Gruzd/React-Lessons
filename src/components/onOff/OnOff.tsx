import {useState} from "react";

// type OnOffType = {
//     // on?: boolean
//     // className?: string
// }
export const OnOff = () => {

    console.log('onOff rendering')

    let [on, setOn] = useState(false)

    const onOffStyle = {
        display: 'flex',
        marginTop: '10px',
    }
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '2px',
        backgroundColor: on ? 'green' : '',
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        margin: '0 10px',
        padding: '2px',
        backgroundColor: on ? '' : 'red',
    }

    const indicatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '10px',
        border: '1px solid black',
        backgroundColor: on ? 'green' : 'red',
    }

    const onClickOnHandler = () => {
        setOn(true)
    }

    const onClickOffHandler = () => {
        setOn(false)
    }

    return (
        <div style={onOffStyle}>
            <div style={onStyle} onClick={ onClickOnHandler }>on</div>
            <div style={offStyle} onClick={ onClickOffHandler }>off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}