import type { Meta, StoryObj } from '@storybook/react'
import { fn } from "@storybook/test";
import {Accordion} from "./Accordion.tsx";
import {useState} from "react";
import {action} from "@storybook/addon-actions";

const meta: Meta<typeof Accordion> = {
    component: Accordion,
}
export default meta

type Story = StoryObj<typeof Accordion>

const onClickCallback = action('some item was clicked');

// export const CollapsedAccordion: Story = {
//     args: {
//         title: 'CollapsedAccordion',
//         collapsed: true,
//         setAccordionCollapsed: fn(),
//         items: ['1','2','3']
//     }
// }
// export const OpenedAccordion: Story = {
//     args: {
//         title: 'OpenedAccordion',
//         collapsed: false,
//         setAccordionCollapsed: fn(),
//         items: ['1','2','3']
//     }
// }

export const UsersCollapsedAccordion: Story = {
    args: {
        title: 'UsersCollapsedAccordion',
        collapsed: true,
        setAccordionCollapsed: fn(),
        items: [
            {title: 'Nikolay', value: '1'},
            {title: 'Dimych', value: '2'},
            {title: 'Andrey', value: '3'}
        ],
        onClick: onClickCallback
    }
}
export const UsersOpenedAccordion: Story = {
    args: {
        title: 'UsersOpenedAccordion',
        collapsed: false,
        setAccordionCollapsed: fn(),
        items: [
            {title: 'Nikolay', value: '1'},
            {title: 'Dimych', value: '2'},
            {title: 'Andrey', value: '3'}
        ],
        onClick: onClickCallback
    }
}

const users = [
    {title: 'Nikolay', value: '1'},
    {title: 'Dimych', value: '2'},
    {title: 'Andrey', value: '3'}
]

// export const WorkingAccordion = () => {
//     const [collapsed, setCollapsed] = useState<boolean>(false)
//     return <Accordion items={['1','2','3']} title={'Working Accordion'} collapsed={collapsed} setAccordionCollapsed={setCollapsed} />
// }

export const UsersWorkingAccordion = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    return <Accordion items={users}
                      title={'Working Users Accordion'}
                      collapsed={collapsed}
                      onClick={(id) => alert(`user with ID ${id} should be happy`)}
                      setAccordionCollapsed={setCollapsed} />
}