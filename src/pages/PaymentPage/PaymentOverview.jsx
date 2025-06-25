import { Form, useNavigate } from "react-router"
import '../ContactPage/contact.scss';
import { z } from 'zod';
import { useState } from "react";


export default function PaymentOverview() {
    const cartInfo = JSON.parse(sessionStorage.getItem('cart')) || []
    
    const deliveryPrice = 4
    const totalPrice = cartInfo.reduce((acc, item) => acc + Number(item.price), 0)
    const vat = totalPrice * .25
    const totalWithDelivery = totalPrice + deliveryPrice + vat ;

    const navigate = useNavigate()
    const [error, setError] = useState()

    function handlePayment(event) {
        event.preventDefault();

        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)
        const paymentInfo = JSON.parse(sessionStorage.getItem('paymentInfo'))

        if(!paymentInfo){
            setError('you need to add all your data !')
            return
        }

        if (!data.agree) {
        setError("You must accept the terms of trade before continuing.");
        return; // don't navigate
        }


        try {
        navigate("/invoice");
        } catch (err) {
        setError("Navigation error: " + err.message);
        }
    }
    


    return (
        <>
            <section className="my__cart form">
                <h2>Payment overview</h2>
                <div>
                    {cartInfo.map((item) => (
                        <div className="cart__item" key={item.id}>
                            <p>{item.name}</p>
                            <p><span>{item.currency}</span>{item.price}</p>
                        </div>
                    ))}
                    <p className="price">
                        Price <span className="total"> £ {totalPrice.toLocaleString()}</span>
                    </p>
                </div>

                <div className="payment__shipping">
                    <div className="cart__item">
                        <p>Delivery price</p>
                        <span>£ {deliveryPrice}</span>
                    </div>
                    <div className="cart__item">
                        <p>VAT</p>
                        <span> £ {vat.toLocaleString()}</span>
                    </div>

                    <p className="price total">
                       Total Price <span className="total"> £ {totalWithDelivery.toLocaleString()}</span>
                    </p>
                </div>
            </section>

            <Form className="terms-and-conditions" onSubmit={handlePayment}>
                <div className="form__checkbox">
                <input className="checkbox" type="checkbox" name="marketing" />
                <label>Subscribe to newsletter</label>
                </div>
                <div className="form__checkbox">
                <input className="checkbox" type="checkbox" name="agree" />
                <label>I accept the terms of trade (read in new window)</label>
                </div>

                {error && <p className="error">{error}</p>}

                <button type="submit" className="form__btn flex__start">
                Checkout
                </button>
            </Form>
        </>
    );
}
