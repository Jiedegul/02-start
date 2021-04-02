import Header from "./Header"
import Body from "./Body"
import {Component} from "react"


class App extends Component{

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
    addItem =(item) =>{
        this.setState((state)=>{
            const arr =[...state.arr,item]
            return{arr}
        })
    }
    render (){
        return(
        <div>
            <Header  addItem={this.addItem} />
            <Body deleteItem={this.deleteItem} arr={this.state.arr} />
        </div>
    )
}
}
export default App;