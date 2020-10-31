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
					<CardHeader title={children} />
				</Grid>
				<Grid item>
					<FoodBasketButton onClick={() => clickReset()}>
						Reset
					</FoodBasketButton>
				</Grid>
			</Grid>
			<CardContent>
				{data &&
					data.map((item) => (
						<FoodBasketButton key={item.BasketID} onClick={() => onClick(item)}>
							{item.name}
						</FoodBasketButton>
					))}
			</CardContent>
		</Card>
	);
}
