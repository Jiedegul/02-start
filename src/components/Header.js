import { Component } from "react";

class Header extends Component {
    state = {
        itemValue: ""
    }

    onInputChange = (e) => {
        const input = e.target
        this.setState({
            itemValue: input.value
        })

    }
    onFormSubmit = (e) => {
        e.preventDefault()
        if(this.state.itemValue !== ""){
        this.props.addItem(this.state.itemValue)
        }
        this.setState({
            itemValue: ""
    
        })
    }

    render() {

        return (
            <form onSubmit={this.onFormSubmit} id="myDIV" className="header">
                <h2>My To Do List</h2>
                <input value={this.state.itemValue} onChange={this.onInputChange} type="text" id="myInput" placeholder="Title..." />
                <button type="submit" className="addBtn">Add</button>
            </form>
        )
    }
}
export default Header;