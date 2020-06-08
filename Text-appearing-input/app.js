class App extends React.Component {
    state = {
        value: ""

    }
    handleChange = (e) => {
        console.log("Inside event" + e.target.value)
        console.log("value before setState " + this.state.value)

        this.setState({
            value: e.target.value
        })
        console.log("value after setState " + this.state.value)

    }

    handleClick = () => {
        this.setState({
            value: ""
        })
    }

    render() {
        console.log("value during render " + this.state.value)

        return (
            <>
                <input value={this.state.value} placeholder="Write text"
                    onChange={this.handleChange} type="text" />
                <button onClick={this.handleClick} >Reset</button>
                <h1 className="title">{this.state.value.toUpperCase()}</h1>
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))