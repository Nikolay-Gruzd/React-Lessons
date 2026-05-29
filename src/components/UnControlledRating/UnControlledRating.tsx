// type RatingType = {
//     value: 0 | 1 | 2 | 3 | 4 | 5;
// }

import {useState} from "react";

export function UnControlledRating() { // Компонент UnControlledRating
    console.log('UnControlledRating rendering')

    let [value, setValue] = useState(0)

    const onClickButtonStarHandler = (number: number) => {
        setValue(number)
    }

    return (
        <div>
            <Star selected={value > 0}/> <button onClick={() => onClickButtonStarHandler(1)}>1</button>
            <Star selected={value > 1}/> <button onClick={() => onClickButtonStarHandler(2)}>2</button>
            <Star selected={value > 2}/> <button onClick={() => onClickButtonStarHandler(3)}>3</button>
            <Star selected={value > 3}/> <button onClick={() => onClickButtonStarHandler(4)}>4</button>
            <Star selected={value > 4}/> <button onClick={() => onClickButtonStarHandler(5)}>5</button>
        </div>
    )
}

type StarType = {
    selected: boolean
}

function Star(props: StarType) { // Компонент Star
    console.log('Star rendering')

    return props.selected ? <span><b>star </b></span> : <span>star </span>
}