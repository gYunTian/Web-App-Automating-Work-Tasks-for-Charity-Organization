import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import FoodBasketButton from '../Buttons/FoodBasketButton.js';
import { Block } from '@material-ui/icons';

export default function MainCard({ onClick = '', data, children }) {
	return (
		<Card>
			<CardHeader style={{ backgroundColor: 'primary' }} title='Presets' />
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
