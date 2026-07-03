import type { Meta } from '@storybook/react'
import {UncontrolledOnOff} from "./UncontrolledOnOff.tsx";

const meta: Meta<typeof UncontrolledOnOff> = {
    component: UncontrolledOnOff,
}
export default meta

export const WorkingUnControlledOnOff = () => {
    return <UncontrolledOnOff />
}