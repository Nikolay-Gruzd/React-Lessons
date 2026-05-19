type RatingType = {
    value: number;
}

type StarType = {
    selected: boolean
}

export function Rating(props: RatingType) { // Компонент Rating
    console.log('Rating rendering')

    if (props.value === 1) {
        return <div>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    }
    if (props.value === 2) {
        return <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    }
    if (props.value === 3) {
        return <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    }
    if (props.value === 4) {
        return <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
        </div>
    }
    if (props.value === 5) {
        return <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
        </div>
    }

    return (
        <div>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    )
}

function Star(props: StarType) { // Компонент Star
    console.log('Star rendering')
    if (props.selected) {
        return <span><b>star </b></span>
    }
    return <span>star </span>
}