import { Grid, Container } from '@material-ui/core';
import React, { Component } from 'react';
import MainCard from './Cards/MainCard.js';
import BasketCard from './Cards/BasketCard.js';
import StockCard from './Cards/StockCard.js';
import uuid from 'react-uuid';
import { TodayOutlined } from '@material-ui/icons';

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
		this.handleDecrement = this.handleDecrement.bind(this);
		this.saveBasket = this.saveBasket.bind(this);
		this.createBasket = this.createBasket.bind(this);
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
		const { basketItems, selectedBasket } = this.state;

		if (basketItems === null) {
			return;
		}

		const id = item.stockID;
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
			return;
		} else {
			const updatedItem = {
				quantity: 1,
				basket_BasketID: selectedBasket,
				stock_stockID: id,
				stock_name: item.name,
			};
			const updatedBasket = [...basketItems, updatedItem];
			this.setState({ basketItems: updatedBasket });
			return;
		}
	}

	handleDecrement(item) {
		const { basketItems, selectedBasket, editMode } = this.state;
		if (!editMode) {
			return;
		}

		const id = item.stock_stockID;
		const itemToUpdate = basketItems.filter(
			(obj) => obj.stock_stockID === id
		)[0];

		if (itemToUpdate.quantity === 1) {
			const updatedBasket = basketItems.filter(
				(obj) => obj.stock_stockID !== id
			);
			this.setState({ basketItems: updatedBasket });
			return;
		} else {
			const updatedBasket = basketItems.map((obj) => {
				if (obj.stock_stockID === id) {
					return { ...obj, quantity: obj.quantity - 1 };
				} else {
					return obj;
				}
			});
			this.setState({ basketItems: updatedBasket });
		}
	}

	saveBasket() {
		const { basket, basketItems, selectedBasket, editMode } = this.state;
		const basketToUpdate = basket.find(
			(item) => item.BasketID === selectedBasket
		);
		const updatedBasket = { ...basketToUpdate, stocks: basketItems };
		const updatedAllBaskets = basket.map((item) => {
			if (item.BasketID === selectedBasket) {
				return updatedBasket;
			} else {
				return item;
			}
		});
		this.setState({ basket: updatedAllBaskets, editMode: false });
	}
	createBasket(e) {
		if (e.key !== 'Enter') {
			return;
		}
		const { basket } = this.state;
		console.log(basket);
		const id = uuid.v4();
		console.log(id);
		// TODO: create new basket
	}
	// PUT API
	// const url =
	// 	'https://smucf-dev-ebs-g1t3-srv.cfapps.us10.hana.ondemand.com/api/Basket/' +
	// 	selectedBasket;
	// fetch(url, {
	// 	headers: { 'Content-Type': 'application/json' },
	// 	method: 'PUT',
	// 	body: JSON.stringify({
	// 		BasketID: selectedBasket,
	// 		name: basketToUpdate.name,
	// 		stocks: basketToUpdate.stocks,
	// 	}),
	// });

	render() {
		const { basket, allStocks, basketItems, editMode } = this.state;
		return (
			<div className='container mx-auto px-4 sm:px-8 mt-18 flex-grow h-full'>
			<div className='py-8 flex-grow flex-col flex bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 mt-4 h-auto'>
			<Grid
				container
				direction='row'
				justify='flex-start'
				alignItems='flex-start'
				spacing={4}
				className = 'flex flex-row'
			>
				<Grid item>
					<MainCard
						onClick={this.expandBasket}
						clickReset={this.resetShowBasket}
						data={basket}
						createBasket={this.createBasket}
					>
						Presets
					</MainCard>
				</Grid>

				<Grid item>
					<BasketCard
						onClickEdit={this.showAllStocks}
						onClickRemove={this.handleDecrement}
						onClickSave={this.saveBasket}
						data={basketItems}
					>
						Food Items
					</BasketCard>
				</Grid>

				<Grid item>
					<StockCard
						increment={this.handleIncrement}
						checker={editMode}
						data={allStocks}
					>
						All Stocks
					</StockCard>
				</Grid>
				
			</Grid>
			</div>
			</div>
		);
	}
}

export default Basket;
