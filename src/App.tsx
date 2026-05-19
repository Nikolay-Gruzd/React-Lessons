import './App.css';
import {Accordion} from "./components/Accordion/Accordion.tsx";
import {Rating} from "./components/Rating/Rating.tsx";

type PageTitleType = {
    title: string
}

export const App = ()=> {
    console.log('App rendering')
    return (
        <div className="App">
            <PageTitle title={'This is App component'}/>

            Article 1
            <Rating value={0}/>
            <Accordion title={'Меню'}/>
            <Accordion title={'Список'}/>

            Article 2
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );

    function PageTitle(props: PageTitleType) {
        console.log('App Title rendering');
        return(
            <h1>
                {props.title}
            </h1>
        )
    }
}
