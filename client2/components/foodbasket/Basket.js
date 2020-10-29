import React, { Component } from "react";
import FoodBasketButton from "./Buttons/FoodBasketButton.js";

class Basket extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data : props.data,
            showBasket : false,
            basketItems: null,
            onToggleFoodItem: false
        };

        this.expandBasket = this.expandBasket.bind(this)
    }

    expandBasket(id, foodItems) {
        const toggled = this.state.showBasket ? false : true;
        this.setState({showBasket: toggled,
        basketItems: foodItems});
    }

    toggleAddRemove() {
        const toggled = this.state.onToggleFoodItem ? false : true;
        this.setState({onToggleFoodItem: toggled});
    }
    render() {
        const {data, showBasket, basketItems} = this.state;
        return (
            <div>
                {data.map((item) => 
            <div key = {item.BasketID}>
                <span>
                    <FoodBasketButton onClick={() => this.expandBasket(item.BasketID, item.stocks)}>{item.name}</FoodBasketButton>
                </span>
            </div>
            )}
            <div> 
                {showBasket && basketItems.map((item) => 
                <div key={item.stock_stockID}>
                    <span>
                        {item.stock_stockID}
                    </span>
                    <span>
                        {item.quantity}
                    </span>
                </div>
                )}
            </div>
        </div>
        )
    }
}


export default Basket;
