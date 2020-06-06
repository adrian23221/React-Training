class ShoppingList extends React.Component {
    state = {
        items1: "juice",
        items2: "apple",
        items3: "beer"
    }
    render() {
        return (
            <>
                <h1>Shopping List</h1>
                <ul>
                    <ItemList name={this.state.items1} count={3} />
                    <ItemList name={this.state.items2} count={5} />
                    <ItemList name={this.state.items3} count={6} />
                </ul>
            </>
        )
    }
}

// const ItemList = (props) => {
//     return (
//         <li>{props.name}</li>
//     )
// }
class ItemList extends React.Component {
    render() {
        return (
            <li> {this.props.name} - {this.props.count}</li >
        )
    }
}


ReactDOM.render(<ShoppingList />, document.getElementById("root"))