import {useState} from "react";

type AccordionType = {
    title: string
    //collapsed: boolean
}

export function UnControlledAccordion(props: AccordionType) { // Компонент UnControlledAccordion
    console.log('UnControlledAccordion rendering')

    let [ collapsed, setCollapsed ] = useState(false)

    return (
        <div>
            <AccordionTitle title={props.title} onClick={() => setCollapsed(!collapsed)}/>
            { collapsed && <AccordionBody/> }
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