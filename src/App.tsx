import './App.css';
// import {Accordion} from "./components/Accordion/Accordion.tsx";
import {Rating, RatingValueType} from "./components/Rating/Rating.tsx";
import {OnOff} from "./components/onOff/OnOff.tsx";
import {useState} from "react";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion.tsx";

export const App = () => {
    console.log('App rendering')

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    // let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [switchOn, setSwitchOn] = useState<boolean>(true)

    // const users = [
    //     {title: 'Nikolay', value: 1},
    //     {title: 'Dymych', value: 2},
    //     {title: 'Andrey', value: 3}
    // ]

    return (
        <div className="App">
            {/*<PageTitle title={'This is App component'}/>*/}

            {/*<Accordion title={'-Users-'}*/}
            {/*           items={users}*/}
            {/*           collapsed={accordionCollapsed}*/}
            {/*           onClick={()=>{}}*/}
            {/*           setAccordionCollapsed={setAccordionCollapsed}/>*/}
            <UnControlledAccordion />

            <Rating value={ratingValue} setRatingValue={setRatingValue}/>
            {/*<UnControlledRating />*/}

            <OnOff switchOn={switchOn} setSwitchOn={setSwitchOn}/>
            {/*<UncontrolledOnOff />*/}
        </div>
    );
}
