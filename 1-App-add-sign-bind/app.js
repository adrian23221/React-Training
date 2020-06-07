class App extends React.Component {
    state = {
        text: ""
    }

    handleClick() {
        // console.log(this.state.text)

        // const letter = "Asia +";
        // this.setState({
        //     text: this.state.text + letter
        // })

        const letter = "Asia +";
        this.setState({
            text: this.state.text + letter
        })
    }
    render() {
        return (
            <>
                <button onClick={this.handleClick.bind(this)}>Add "A"</button>
                <h1>{this.state.text}</h1>
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))