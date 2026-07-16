type ItemType = {
    title: string
    value: any
}
type SelectType = {
    value: any
    onChange: (value: any) => void
    items: Array<ItemType>
}

export function Select(props: SelectType) { // Компонент ControlledSelect
    console.log('ControlledSelect rendering')

    return (
        <div>
            <div>{}</div>
            {props.items.map((i, index) => <div key={index}>{i.title}</div>)}
        </div>
    )
}