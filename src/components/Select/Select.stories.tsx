import {Select} from "./Select.tsx";
import {useState} from "react";

export default {
    title: 'Select',
    component: Select
}

export const WithValue = () => {
    const [value, setValue] = useState('2')
    return <>
        <Select
            value={value}
            onChange={setValue}
            items={[
                {value: '1', title: 'Minsk', country: '', people: 0},
                {value: '2', title: 'Moscow', country: '', people: 0},
                {value: '3', title: 'Kiev',country: '', people: 0}
            ]}
        />
    </>
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null)
    return <>
        <Select
            value={value}
            onChange={setValue}
            items={[
                {value: '1', title: 'Minsk', country: '', people: 0},
                {value: '2', title: 'Moscow', country: '', people: 0},
                {value: '3', title: 'Kiev',country: '', people: 0}
            ]}
        />
    </>
}
