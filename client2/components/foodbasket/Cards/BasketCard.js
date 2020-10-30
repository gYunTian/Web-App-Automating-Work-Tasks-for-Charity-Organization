import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import FoodBasketButton from '../Buttons/FoodBasketButton.js';
import { Block } from '@material-ui/icons';

export default function BasketCard({ onClick = '', data, children }) {
	return (
		<Card>
			<CardHeader style={{ backgroundColor: 'primary' }} title='Food Items' />
			<CardContent>
				{data.map((item) => (
					<div key={item.stock_stockID}>{item.stock_name}</div>
				))}
			</CardContent>
		</Card>
	);
}
