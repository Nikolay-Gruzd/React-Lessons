import './App.css';
import {Accordion} from "./components/Accordion/Accordion.tsx";
import {Rating, RatingValueType} from "./components/Rating/Rating.tsx";
import {OnOff} from "./components/onOff/OnOff.tsx";
import {useState} from "react";

export const App = ()=> {
    console.log('App rendering')

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [switchOn, setSwitchOn] = useState<boolean>(true)

    return (
        <div className="App">
            {/*<PageTitle title={'This is App component'}/>*/}

            <Accordion title={'Меню'} collapsed={accordionCollapsed} setAccordionCollapsed={setAccordionCollapsed}/>
            {/*<UnControlledAccordion />*/}

            <Rating value={ratingValue} setRatingValue={setRatingValue}/>
            {/*<UnControlledRating />*/}

            <OnOff switchOn={switchOn} setSwitchOn={setSwitchOn}/>
            {/*<UncontrolledOnOff />*/}
        </div>
    );
}
