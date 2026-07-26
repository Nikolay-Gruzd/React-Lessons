import s from './Select.module.css'
import {useState, KeyboardEvent} from "react";

type ItemType = {
    title: string
    value: any
}
type SelectType = {
    value?: any
    onChange: (value: any) => void
    items: Array<ItemType>
}

export function Select(props: SelectType) { // Компонент ControlledSelect

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    const toggleItems = () => {
        setActive(!active)
        setHoveredElementValue(props.value)
    }
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems();
    }
    const onMouseEnter = (value: any) => {
        setHoveredElementValue(value)
    }
    const onKeyUp = (e: KeyboardEvent<HTMLSpanElement>) => {
        console.log('press')
        console.log('press1')
    }

    return (
        <>
            <div className={s.select}>
                <span className={s.main}
                      onClick={toggleItems}
                      onKeyUp={onKeyUp}
                      tabIndex={0}
                >
                    {selectedItem && selectedItem.title}
                </span>
                {active &&
                    <div className={s.items}>
                        {props.items.map(i => (
                            <div onClick={() => {
                                onItemClick(i.value)
                            }}
                                 onMouseEnter={() => onMouseEnter(i.value)}
                                 className={s.item + " " + (hoveredItem === i ? s.selected : '')}
                                 key={i.value}
                            >
                                {i.title}
                            </div>
                        ))}
                    </div>
                }
            </div>
        </>
    )
}