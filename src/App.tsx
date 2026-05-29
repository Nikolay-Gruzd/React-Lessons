import './App.css';
// import {Accordion} from "./components/Accordion/Accordion.tsx";
// import {PageTitle} from "./components/PageTitle/PageTitle.tsx";
// import {Rating} from "./components/Rating/Rating.tsx";
import {OnOff} from "./components/onOff/OnOff.tsx";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion.tsx";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating.tsx";

export const App = ()=> {
    console.log('App rendering')
    return (
        <div className="App">
            {/*<PageTitle title={'This is App component'}/>*/}

            {/*<Accordion title={'Меню'} collapsed={true}/>*/}
            {/*<Accordion title={'Список'} collapsed={false}/>*/}

            <UnControlledAccordion title={'Menu'}/>
            <UnControlledAccordion title={'List'}/>

            <UnControlledRating />

            {/*<UnControlledRating value={0}/>*/}
            {/*<UnControlledRating value={1}/>*/}
            {/*<UnControlledRating value={2}/>*/}
            {/*<UnControlledRating value={3}/>*/}
            {/*<UnControlledRating value={4}/>*/}
            {/*<UnControlledRating value={5}/>*/}

            <OnOff/>
            <OnOff/>
        </div>
    );
}
