import { Component } from "react";

class Basket extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data : props.data
        }
    }

    render() {
        return (
            <div>
            {this.state.data.map((item, index) => 
            <div key = {index + new Date().getTime()}>
                <span>
                    {item.name}
                </span>
                <span>{item.category}</span>
            </div>
            )}
        </div>
        )
    }
}


export default Basket;
