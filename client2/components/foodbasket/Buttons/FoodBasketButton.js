import { Button } from '@material-ui/core';

const FoodBasketButton = ({ onClick, className = '', children }) => (
	<div>
		<Button
			color='primary'
			fullWidth='true'
			onClick={onClick}
			className={className}
			type='button'
		>
			{children}
		</Button>
	</div>
);

export default FoodBasketButton;
