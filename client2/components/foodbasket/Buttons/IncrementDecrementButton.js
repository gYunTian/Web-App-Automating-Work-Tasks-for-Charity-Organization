import { Button } from '@material-ui/core';
const IncrementDecrementButton = ({
	onClick = '',
	className = '',
	children,
	data = data,
}) => (
	<Button
		variant='contained'
		color={children === '+' ? 'primary' : 'secondary'}
		onClick={onClick}
		className={className}
	>
		{children}
	</Button>
);

export default IncrementDecrementButton;
