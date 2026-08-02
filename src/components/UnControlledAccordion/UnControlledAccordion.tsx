import {memo, useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer.tsx";

function UnControlledAccordionMemo() { // Компонент UnControlledAccordion
    console.log('UnControlledAccordion rendering')

    // let [ collapsed, setCollapsed ] = useState(true)
    let [ state, dispatch ] = useReducer(reducer, { collapsed: true })

    return (
        <div>
            {/*<AccordionTitle title={'Меню'} onClick={() => setCollapsed(!collapsed)}/>*/}
            <AccordionTitle title={'Меню'} onClick={() => dispatch({type:TOGGLE_COLLAPSED})}/>
            { !state.collapsed && <AccordionBody/> }
        </div>
    )
}
export const UnControlledAccordion = memo(UnControlledAccordionMemo)

type AccordionTitleType = {
    title: string
    onClick: () => void
}

function AccordionTitleMemo(props: AccordionTitleType) { // Компонент AccordionTitle
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
    )
}
const AccordionTitle = memo(AccordionTitleMemo)

function AccordionBodyMemo() { // Компонент AccordionBody
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
const AccordionBody = memo(AccordionBodyMemo)