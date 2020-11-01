import { Grid, Container } from '@material-ui/core';
import React, { Component } from 'react';
import MainCard from './Cards/MainCard.js';
import BasketCard from './Cards/BasketCard.js';
import StockCard from './Cards/StockCard.js';

class Basket extends Component {
	constructor(props) {
		super(props);
		this.state = {
			basket: props.data.basket,
			allStocks: props.data.allStocks,
			basketItems: null,
			selectedBasket: null,
			editMode: false,
		};

		this.expandBasket = this.expandBasket.bind(this);
		this.resetShowBasket = this.resetShowBasket.bind(this);
		this.showAllStocks = this.showAllStocks.bind(this);
		this.handleIncrement = this.handleIncrement.bind(this);
	}

	resetShowBasket() {
		this.setState({
			selectedBasket: null,
			basketItems: null,
			editMode: false,
		});
	}
	expandBasket(item) {
		this.setState({
			basketItems: item.stocks,
			selectedBasket: item.BasketID,
		});
	}

	showAllStocks() {
		this.setState({ editMode: true });
	}

	handleIncrement(item) {
		const id = item.stockID;
		const { basketItems, selectedBasket } = this.state;
		const itemExist = basketItems.filter((obj) => obj.stock_stockID === id);
		if (itemExist && itemExist.length) {
			const updatedBasket = basketItems.map((obj) => {
				if (obj.stock_stockID === id) {
					return { ...obj, quantity: obj.quantity + 1 };
				} else {
					return obj;
				}
			});
			this.setState({ basketItems: updatedBasket });
		} else {
			const updatedItem = {
				quantity: 1,
				basket_BasketID: selectedBasket,
				stock_stockID: id,
				stock_name: item.name,
			};
			if (basketItems.length === null) {
				this.setState({ basketItems: [].push(updatedItem) });
				console.log('0 length updated');
			} else {
				const updatedBasket = [...basketItems, updatedItem];
				this.setState({ basketItems: updatedBasket });
			}
		}
	}

	handleDecrement(item) {
		const id = item.stockID;
		const { basketItems, selectedBasket } = this.state;
	}

	render() {
		const { basket, allStocks, basketItems, editMode } = this.state;
		return (
			<Grid
				container
				direction='row'
				justify='flex-start'
				alignItems='flex-start'
				spacing={4}
			>
				<Grid item>
					<MainCard
						onClick={this.expandBasket}
						clickReset={this.resetShowBasket}
						data={basket}
					>
						Presets
					</MainCard>
				</Grid>
				<Grid item>
					<BasketCard onClickEdit={this.showAllStocks} data={basketItems}>
						Food Items
					</BasketCard>
				</Grid>
				<Grid item>
					<StockCard
						increment={this.handleIncrement}
						checker={editMode}
						data={allStocks}
					></StockCard>
				</Grid>
			</Grid>
		);
	}
}

export default Basket;
