
type OnOffType = {
    on: boolean
    className?: string
}
export const OnOff = (props: OnOffType) => {
    return (
        <div className='onOff'>
            <span className={props.on ? 'bgColorGreen' : ''}>on</span>
            <span className={!props.on ? 'bgColorRed' : ''}>off</span>
            <span className={!props.on ? 'bgColorRed' : 'bgColorGreen'}></span>
        </div>
    )
}