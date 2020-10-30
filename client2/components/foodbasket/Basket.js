import { Container } from '@material-ui/core';
import React, { Component } from 'react';
import FoodBasketButton from './Buttons/FoodBasketButton.js';
import MainCard from './Cards/MainCard.js';
import BasketCard from './Cards/BasketCard.js';

class Basket extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: props.data,
			basketItems: null,
		};

		this.expandBasket = this.expandBasket.bind(this);
		this.resetShowBasket = this.resetShowBasket.bind(this);
	}

	resetShowBasket() {
		this.setState({ basketItems: null });
	}
	expandBasket(foodItems) {
		this.setState({ basketItems: foodItems });
	}

	render() {
		const { data, basketItems } = this.state;
		console.log(basketItems);
		return (
			<div>
				<div
					style={{
						display: 'inline-block',
						marginTop: '5%',
						marginLeft: '5%',
					}}
				>
					<FoodBasketButton onClick={() => this.resetShowBasket()}>
						Reset
					</FoodBasketButton>
					<MainCard onClick={this.expandBasket} data={data} />
				</div>
				<div
					style={{
						display: 'inline-block',
						marginTop: '5%',
						marginLeft: '25%',
					}}
				>
					{basketItems && basketItems.length !== 0 && (
						<BasketCard data={basketItems}></BasketCard>
					)}
				</div>
			</div>
		);
	}
}

export default Basket;
