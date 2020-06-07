class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // text: ""
        }
    }
    handleClick() {
        console.log(this);
        const letter = "Asia +";
        this.setState({
            text: this.state.text + letter
        })
        this.handleClick = this.handleClick.bind(this)
    }
    render() {
        return (
            <>
                <button onClick={this.handleClick}>Add "A"</button>
                <h1>{this.state.text}</h1>
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))