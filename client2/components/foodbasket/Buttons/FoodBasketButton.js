import { Button } from '@material-ui/core';

const FoodBasketButton = ({ onClick, className = '', children }) => (
	<div>
		<Button
			color='primary'
			fullWidth='true'
			onClick={onClick}
			className={className}
			type='button'
			style={{ textAlign: 'left' }}
		>
			{children}
		</Button>
	</div>
);

export default FoodBasketButton;
