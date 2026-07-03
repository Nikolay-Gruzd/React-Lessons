import type { Meta, StoryObj } from '@storybook/react'
import { fn } from "@storybook/test";
import {Accordion} from "./Accordion.tsx";
import {useState} from "react";

const meta: Meta<typeof Accordion> = {
    component: Accordion,
}
export default meta

type Story = StoryObj<typeof Accordion>

export const CollapsedAccordion: Story = {
    args: {
        title: 'CollapsedAccordion',
        collapsed: true,
        setAccordionCollapsed: fn()
    }
}
export const OpenedAccordion: Story = {
    args: {
        title: 'OpenedAccordion',
        collapsed: false,
        setAccordionCollapsed: fn()
    }
}

// const setAccordionCollapsedCallback = action("Accordion mode changed")
//
// export const CollapsedAccordion = () => {
//     return <Accordion title={'Collapsed Accordion'} collapsed={true} setAccordionCollapsed={setAccordionCollapsedCallback} />
// }
//
// export const OpenedAccordion = () => {
//     return <Accordion title={'Opened Accordion'} collapsed={false} setAccordionCollapsed={setAccordionCollapsedCallback} />
// }

export const WorkingAccordion = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    return <Accordion title={'Working Accordion'} collapsed={collapsed} setAccordionCollapsed={setCollapsed} />
}