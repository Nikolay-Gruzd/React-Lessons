import './App.css';

export const App = ()=> {
    return (
        <div className="App">
            This is App component
            <Rating/>
            <Accordion/>
        </div>
    );

    function Rating() { //Компонент Rating
        return (
            <div>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
            </div>
        )
    }

    function Star() { //Компонент Star
        return (
            <div>star</div>
        )
    }

    function Accordion() { //Компонент Accordion
        return (
            <div>
                <h3>Меню</h3>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        )
    }
}
