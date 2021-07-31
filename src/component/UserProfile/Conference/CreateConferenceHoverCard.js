import classes from './Cart.module.css'
import Modal from '../../UI/Modal'
import React from 'react'




const Cart = (props) => {

    return (
        <Modal>
            <ul className={classes['cart-items']}>
                <li>Dummy List 1</li>
                <li>Dummy List 2</li>
                <li>Dummy List 3</li>
            </ul>

            <div className={classes.total}>
                <h1>H1 Headers here!</h1>
            </div>
            <div className={classes.actions}>
                <button>
                    Close
                </button>
                <button className={classes['button--alt']}>
                    Order
                </button>
            </div>
        </Modal>
    )
}

export default Cart