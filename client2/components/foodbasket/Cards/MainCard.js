import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import FoodBasketButton from '../Buttons/FoodBasketButton.js';
import { Grid } from '@material-ui/core';

export default function MainCard({
	onClick = '',
	clickReset = '',
	data,
	children,
}) {
	return (
		<Card>
			<Grid container>
				<Grid item>
					<CardHeader title='Presets' />
				</Grid>
				<Grid item>
					<FoodBasketButton onClick={() => clickReset()}>
						Reset
					</FoodBasketButton>
				</Grid>
			</Grid>
			<CardContent>
				{data.map((item) => (
					<FoodBasketButton onClick={() => onClick(item.stocks)}>
						{item.name}
					</FoodBasketButton>
				))}
			</CardContent>
		</Card>
	);
}
