type AccordionType = {
    title: string
    collapsed: boolean
}

export function Accordion(props: AccordionType) { // Компонент Accordion
    console.log('Accordion rendering')
    return (
        props.collapsed ?
            <div>
                <AccordionTitle title={props.title}/>
            </div>
            :<div>
                <AccordionTitle title={props.title}/>
                <AccordionBody/>
            </div>
    )
}

type AccordionTitleType = {
    title: string
}

function AccordionTitle(props: AccordionTitleType) { // Компонент AccordionTitle
    console.log('AccordionTitle rendering')
    return (
        <h3>{props.title}</h3>
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