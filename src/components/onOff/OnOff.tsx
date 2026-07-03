
export type OnOffType = {
    switchOn: boolean
    setSwitchOn: (value: boolean) => void
}

export const OnOff = (props: OnOffType) => {

    console.log('onOff rendering')

    const onOffStyle = {
        display: 'flex',
        marginTop: '10px',
    }
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '2px',
        backgroundColor: props.switchOn ? 'green' : '',
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        margin: '0 10px',
        padding: '2px',
        backgroundColor: props.switchOn ? '' : 'red',
    }

    const indicatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '10px',
        border: '1px solid black',
        backgroundColor: props.switchOn ? 'green' : 'red',
    }

    const onClickOnHandler = () => {
        props.setSwitchOn(true)
    }

    const onClickOffHandler = () => {
        props.setSwitchOn(false)
    }

    return (
        <div style={onOffStyle}>
            <div style={onStyle} onClick={ onClickOnHandler }>on</div>
            <div style={offStyle} onClick={ onClickOffHandler }>off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}