import React, {FC} from 'react'
import emptyCart from './../assets/img/empty-cart.png'
import {Link} from 'react-router-dom'

const CartEmpty: FC = () => {
    return (
        <div className="cart cart--empty">
            <h2>Корзина пустая 😕</h2>
            <p>
                Чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src={emptyCart} alt="Empty cart"/>
            <Link to="/" className="button button--black">
                <span>Вернуться назад</span>
            </Link>
        </div>
    )
}

export default CartEmpty