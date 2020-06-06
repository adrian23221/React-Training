// non state components

// const App = () => {
//     return (
//         <div>
//             <h1>First Component</h1>
//         </div>
//     )
// }

//state component 

const Header = () => {
    return <h1>Welcome</h1>
}

class Blog extends React.Component {
    state = {
        number: 0,
        imie: "Asia"
    }
    render() {
        return (
            <section>
                <h2>Class component {this.state.imie}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, perferendis! Veritatis, facere ex. Optio sequi voluptatibus minus amet dolore minima impedit assumenda non? Nesciunt, cumque. Ab rem fugiat accusamus voluptate.</p>
            </section>
        )
    }
}

const App = () => {
    return (
        <>
            <Header />
            <Blog />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))