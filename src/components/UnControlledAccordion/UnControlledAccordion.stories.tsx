import type { Meta } from '@storybook/react'
import {UnControlledAccordion} from "./UnControlledAccordion.tsx";

const meta: Meta<typeof UnControlledAccordion> = {
    component: UnControlledAccordion,
}
export default meta

export const WorkingUnControlledAccordion = () => {
    return <UnControlledAccordion />
}