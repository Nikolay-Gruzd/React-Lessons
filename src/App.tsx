import './App.css';

export const App = ()=> {
    console.log('App rendering')
    return (
        <div className="App">
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );

    function AppTitle() {
        console.log('App Title rendering');
        return(
            <>
                This is App component
            </>
        )
    }

    function Rating() { // Компонент Rating
        console.log('Rating rendering')
        return (
            <div>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
            </div>
        )

        function Star() { // Компонент Star
            console.log('Star rendering')
            return (
                <div>star</div>
            )
        }
    }


    function Accordion() { // Компонент Accordion
        console.log('Accordion rendering')
        return (
            <div>
                <AccordionTitle/>
                <AccordionBody/>
            </div>
        )

        function AccordionTitle() { // Компонент AccordionTitle
            console.log('AccordionTitle rendering')
            return (
                <h3>Меню</h3>
            )
        }

        function AccordionBody() { // Компонент AccordionBody
            console.log('AccordionBody rendering')
            return (
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            )
        }
    }
}
