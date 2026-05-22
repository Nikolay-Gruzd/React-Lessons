import './App.css';
import {Accordion} from "./components/Accordion/Accordion.tsx";
// import {PageTitle} from "./components/PageTitle/PageTitle.tsx";
import {Rating} from "./components/Rating/Rating.tsx";
import {OnOff} from "./components/onOff/OnOff.tsx";

export const App = ()=> {
    console.log('App rendering')
    return (
        <div className="App">
            {/*<PageTitle title={'This is App component'}/>*/}

            <Accordion title={'Меню'} collapsed={true}/>
            <Accordion title={'Список'} collapsed={false}/>

            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>

            <OnOff on={true}/>
            <OnOff on={false}/>
        </div>
    );
}
