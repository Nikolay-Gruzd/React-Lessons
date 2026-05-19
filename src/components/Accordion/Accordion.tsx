type AccordionType = {
    title: string
}

export function Accordion(props: AccordionType) { // Компонент Accordion
    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </div>
    )
}

function AccordionTitle(props: AccordionType) { // Компонент AccordionTitle
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