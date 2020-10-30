const FoodBasketButton = ({onClick, className='', children}) => (
    <button onClick={onClick} className={className} type='button'>
        {children}
    </button>
)

export default FoodBasketButton;