import { Card, Grid, Paper, Box } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IncrementDecrementButton from '../Buttons/IncrementDecrementButton.js';

export default function BasketCard({ onClick = '', data, children }) {
	return (
		<Card>
			<CardHeader title='Food Items' />
			<CardContent>
				{data.map((item) => (
					<Grid
						container
						direction='row'
						justify='space-evenly'
						alignItems='center'
					>
						<Grid>
							<IncrementDecrementButton>-</IncrementDecrementButton>
						</Grid>
						<Grid item>
							<Paper key={item.stock_stockID}>{item.stock_name}</Paper>
						</Grid>
						<Grid>
							<IncrementDecrementButton>+</IncrementDecrementButton>
						</Grid>
					</Grid>
				))}
			</CardContent>
		</Card>
	);
}
