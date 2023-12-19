import './CartIcon.css'
import cart from '../../assets/cart.svg'

const CartIcon = () => {
    return (
        <div className="cart-container">
            <a className='cart-link' href="#">
                <img src={cart} className='cart-image'></img>
            </a>
            <div className="cart-badge">3</div>
        </div>
    )
}

export default CartIcon
