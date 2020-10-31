import { Grid, Container } from '@material-ui/core';
import React, { Component } from 'react';
import FoodBasketButton from './Buttons/FoodBasketButton.js';
import MainCard from './Cards/MainCard.js';
import BasketCard from './Cards/BasketCard.js';
// import styles from './Basket.module.css';

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
		return (
			<Grid
				container
				direction='row'
				justify='flex-start'
				alignItems='flex-start'
			>
				<Grid item>
					<MainCard
						onClick={this.expandBasket}
						clickReset={this.resetShowBasket}
						data={data}
					/>
				</Grid>
				<Grid item>hello</Grid>
			</Grid>
		);
	}
}

export default Basket;
