type RatingType = {
    value: 0 | 1 | 2 | 3 | 4 | 5;
}

export function Rating(props: RatingType) { // Компонент UnControlledRating
    console.log('UnControlledRating rendering')

    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </div>
    )
}

type StarType = {
    selected: boolean
}

function Star(props: StarType) { // Компонент Star
    console.log('Star rendering')
    if (props.selected) {
        return <span><b>star </b></span>
    }
    return <span>star </span>
}