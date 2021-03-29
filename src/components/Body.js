import Bodyitem from "./Bodyitem"

const Body = () => {
    const arr=[
        "Hit the gym",
        "Meet George",
        "Buy eggs",
        "Read a book",
        "Organize office"

    ]
    return (
        <ul id="myUL">
           {arr.map((item)=><Bodyitem item={item}/>)}
        </ul>
    )
    }
    export default Body;