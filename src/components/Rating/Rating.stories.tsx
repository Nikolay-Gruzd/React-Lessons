import { fn } from "@storybook/test";
import {Rating, RatingValueType} from "./Rating.tsx";
import {useState} from "react";
import type {StoryObj} from "@storybook/react";

export default {
    title: 'Rating',
    component: Rating,
}

type Story = StoryObj<typeof Rating>

export const EmptyRating: Story = {
    args: {
        value: 0,
        setRatingValue: fn()
    }
}
export const Rating1: Story = {
    args: {
        value: 1,
        setRatingValue: fn()
    }
}
export const Rating2: Story = {
    args: {
        value: 2,
        setRatingValue: fn()
    }
}
export const Rating3: Story = {
    args: {
        value: 3,
        setRatingValue: fn()
    }
}
export const Rating4: Story = {
    args: {
        value: 4,
        setRatingValue: fn()
    }
}
export const Rating5: Story = {
    args: {
        value: 5,
        setRatingValue: fn()
    }
}

// export const EmptyRating = () => <Rating value={0} setRatingValue={fn()} />
// export const Rating1 = () => <Rating value={1} setRatingValue={fn()} />
// export const Rating2 = () => <Rating value={2} setRatingValue={fn()} />
// export const Rating3 = () => <Rating value={3} setRatingValue={fn()} />
// export const Rating4 = () => <Rating value={4} setRatingValue={fn()} />
// export const Rating5 = () => <Rating value={5} setRatingValue={fn()} />

export const ChangeRating = () => {
    const [rating, setRating] = useState<RatingValueType>(3)
    return <Rating value={rating} setRatingValue={setRating} />
}