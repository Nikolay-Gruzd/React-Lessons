import './App.css';
import {Accordion} from "./components/Accordion/Accordion.tsx";
// import {PageTitle} from "./components/PageTitle/PageTitle.tsx";
import {Rating, RatingValueType} from "./components/Rating/Rating.tsx";
import {OnOff} from "./components/onOff/OnOff.tsx";
// import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion.tsx";
import {useState} from "react";
// import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating.tsx";

export const App = ()=> {
    console.log('App rendering')

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)

    return (
        <div className="App">
            {/*<PageTitle title={'This is App component'}/>*/}

            <Accordion title={'Меню'} collapsed={accordionCollapsed} setAccordionCollapsed={setAccordionCollapsed}/>
            {/*<UnControlledAccordion title={'Menu'}/>*/}

            <Rating value={ratingValue} setRatingValue={setRatingValue}/>
            {/*<UnControlledRating />*/}

            <OnOff/>
            <OnOff/>
        </div>
    );
}
