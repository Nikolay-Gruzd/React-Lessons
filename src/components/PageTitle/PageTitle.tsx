import {memo} from "react";

type PageTitleType = {
    title: string
}

function PageTitleMemo(props: PageTitleType) {
    console.log('App Title rendering');
    return(
        <h1>
            {props.title}
        </h1>
    )
}
export const PageTitle = memo(PageTitleMemo)