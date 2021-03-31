import { Component } from "react"


// const Bodyitem = (props)=> { 
//     return <li>{props.item}</li>
// }
class BodyItem extends Component {

    state = {
        checked: false

    }


    onClikchecked = () => {
        this.setState((state)=>{
            return{
            checked:!state.checked
        }
    })
    }
        onDbClickDelete =() =>{
        this.props.deleteItem(this.props.item)
}

    render() {
        let classNameChecked = ""

        if (this.state.checked === true) {
            classNameChecked = "checked"
        }

        return <li
        onDoubleClick={this.onDbClickDelete} onClick={this.onClikchecked}
         className={classNameChecked}>{this.props.item}</li>
    }
}
export default BodyItem;