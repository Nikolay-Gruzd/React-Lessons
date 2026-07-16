type ItemType = {
    title: string
    value: any
}
type AccordionType = {
    title: string
    collapsed: boolean
    setAccordionCollapsed: (collapsed: boolean) => void
    items: Array<ItemType>
    onClick: (value: any) => void
}
export function Accordion(props: AccordionType) { // Компонент UnControlledAccordion
    console.log('UnControlledAccordion rendering')
    return (
        <div>
            <AccordionTitle title={props.title} onClick={() => props.setAccordionCollapsed(!props.collapsed)}/>
            { !props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/> }
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

type AccordionBodyType = {
    items: Array<ItemType>
    onClick: (value: any) => void
}
function AccordionBody(props: AccordionBodyType) { // Компонент AccordionBody
    console.log('AccordionBody rendering')
    return (
        <ul>
            { props.items.map( (item, index) => <li onClick={() => props.onClick(item.value)} key={index}>{item.title}</li> ) }
        </ul>
    )
}