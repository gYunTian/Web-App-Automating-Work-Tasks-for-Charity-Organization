import { Card, Grid, Typography } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import FoodBasketButton from '../Buttons/FoodBasketButton.js';

export default function BasketCard({
	onClick = '',
	onClickEdit = '',
	data,
	children,
}) {
	return (
		<Card>
			<Grid container>
				<Grid item>
					<CardHeader title={children} />
				</Grid>
				<Grid item>
					<FoodBasketButton onClick={() => onClickEdit()}>
						Enable Editing
					</FoodBasketButton>
				</Grid>
			</Grid>
			<CardContent>
				{data !== null && data.length !== 0 ? (
					data.map((item) => (
						<Grid key={item.stock_stockID}>
							<Grid item>
								<Grid container>
									<Grid item>
										<FoodBasketButton oncClick=''>
											{item.stock_name}
										</FoodBasketButton>
									</Grid>
									<Grid item>
										<Typography>{item.quantity}</Typography>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					))
				) : (
					<Typography variant='h5' component='h2' color='textSecondary'>
						Please select a basket preset
					</Typography>
				)}
			</CardContent>
		</Card>
	);
}
