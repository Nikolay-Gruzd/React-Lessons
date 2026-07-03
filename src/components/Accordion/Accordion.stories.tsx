import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from "storybook/test";

import {Accordion} from "./Accordion.tsx";
import {useState} from "react";

const meta: Meta<typeof Accordion> = {
    component: Accordion,
}
export default meta

type Story = StoryObj<typeof Accordion>

export const FirstStory: Story = {
    args: {
        title: 'FirstStory',
        collapsed: true,
        setAccordionCollapsed: fn()
    }
}

const setAccordionCollapsedCallback = fn()

export const CollapsedAccordion = () => {
    return <Accordion title={'Collapsed Accordion'} collapsed={true} setAccordionCollapsed={setAccordionCollapsedCallback} />
}

export const OpenedAccordion = () => {
    return <Accordion title={'Opened Accordion'} collapsed={false} setAccordionCollapsed={setAccordionCollapsedCallback} />
}

export const WorkingAccordion = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    return <Accordion title={'Working Accordion'} collapsed={collapsed} setAccordionCollapsed={setCollapsed} />
}