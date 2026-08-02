import {memo} from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingType = {
    value: RatingValueType
    setRatingValue: (value: RatingValueType) => void
}

function RatingMemo(props: RatingType) { // Компонент UnControlledRating
    console.log('UnControlledRating rendering')

    return (
        <div>
            <Star selected={props.value > 0} value={1} setRatingValue={props.setRatingValue}/>
            <Star selected={props.value > 1} value={2} setRatingValue={props.setRatingValue}/>
            <Star selected={props.value > 2} value={3} setRatingValue={props.setRatingValue}/>
            <Star selected={props.value > 3} value={4} setRatingValue={props.setRatingValue}/>
            <Star selected={props.value > 4} value={5} setRatingValue={props.setRatingValue}/>
        </div>
    )
}
export const Rating = memo(RatingMemo)

type StarType = {
    selected: boolean
    value: RatingValueType
    setRatingValue: (value: RatingValueType) => void
}

function StarMemo(props: StarType) { // Компонент Star
    console.log('Star rendering')

    return <span onClick={() => props.setRatingValue(props.value)}>
        { props.selected ? <b>star </b> : 'star '}
    </span>
}
const Star = memo(StarMemo)