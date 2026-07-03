import type { Meta } from '@storybook/react'
import {UnControlledRating} from "./UnControlledRating.tsx";

const meta: Meta<typeof UnControlledRating> = {
    component: UnControlledRating,
}
export default meta

export const WorkingUnControlledOnOff = () => {
    return <UnControlledRating />
}