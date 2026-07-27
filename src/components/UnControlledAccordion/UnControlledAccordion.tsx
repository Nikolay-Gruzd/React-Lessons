import {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer.tsx";

export function UnControlledAccordion() { // Компонент UnControlledAccordion
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

type AccordionTitleType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitleType) { // Компонент AccordionTitle
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
    )
}

function AccordionBody() { // Компонент AccordionBody
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}