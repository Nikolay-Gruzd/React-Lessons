type PageTitleType = {
    title: string
}

export function PageTitle(props: PageTitleType) {
    console.log('App Title rendering');
    return(
        <h1>
            {props.title}
        </h1>
    )
}