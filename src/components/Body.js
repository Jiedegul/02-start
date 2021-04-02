import Bodyitem from "./Bodyitem"
import { Component } from "react"


class Body extends Component {
  
    render() {
        return (
            <ul id="myUL">
                {this.props.arr.map((item) =>(
                 <Bodyitem key={item}deleteItem={this.props.deleteItem}item={item} />))}
            </ul>
        )
    }
}
export default Body;