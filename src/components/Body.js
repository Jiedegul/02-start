import Bodyitem from "./Bodyitem"
import { Component } from "react"


class Body extends Component {
    state = {
        arr: ["Hit the gym",
            "Meet George",
            "Buy eggs",
            "Read a book",
            "Organize office"

        ]
    }

    deleteItem= (deleteItem)=>{
        this.setState((state)=>{
            const arr =state.arr.filter((item)=>item!==deleteItem)
            return{arr}
        })
    }
    render() {
        return (
            <ul id="myUL">
                {this.state.arr.map((item) =>(
                 <Bodyitem deleteItem={this.deleteItem}item={item} />))}
            </ul>
        )
    }
}
export default Body;