import { fn } from "storybook/test";
import {useState} from "react";
import {OnOff} from "./OnOff.tsx";
import type {StoryObj} from "@storybook/react-vite";

export default {
    title: 'OnOff',
    component: OnOff,
}

type Story = StoryObj<typeof OnOff>

export const OnMode: Story = {
    args: {
        switchOn: true,
        setSwitchOn: fn()
    }
}
export const OffMode: Story = {
    args: {
        switchOn: false,
        setSwitchOn: fn()
    }
}

// export const OnMode = () => <OnOff switchOn={true} setSwitchOn={fn()} />
// export const OffMode = () => <OnOff switchOn={false} setSwitchOn={fn()} />

export const ChangingMode = () => {
    const [on, setOn] = useState<boolean>(true);
    return <OnOff switchOn={on} setSwitchOn={setOn} />
}