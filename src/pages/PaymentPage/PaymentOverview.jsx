import { Form } from "react-router"

import '../ContactPage/contact.scss';

export default function PaymentOverview() {

    return (
        <>

         <section className="my__cart form">

                 <h2>Payment overview</h2>
    <div className="payment__item">
                 <ul>
                    <li><div className="item__info">
                            <p>Auralic Aries G2.1 Streamer</p>
                            <span>£4,799.00</span>
                        </div>
                    </li>
                    <li>
                        <div className="item__info">
                            <p>Auralic Aries G2.1 Streamer</p>
                            <span>£4,799.00</span>
                        </div>
                    </li>
                 </ul>

                 <span className="cart__total">Price £9,598.00 </span>

    </div>
    <div className="payment__shipping">      
                    <ul>
                        <li>
                            <div className="item__info">
                                <p>Delivery price</p>
                                <span>£4.00</span>
                            </div>
                            <div className="item__info">
                                <p>VAT</p>
                                <span>£1,919.60</span>
                            </div>
                        </li>
                    </ul>

                      <span className="cart__total">Total Price £9,598.00 </span>
    </div>  
      </section>
            <Form className="terms-and-conditions">
                <div className="form__checkbox">
                    <input className="checkbox" type="checkbox" name="marketing" />
                    <label> Subscribe to newsletter</label>
                </div>
                <div className="form__checkbox">
                    <input className="checkbox" type="checkbox" name="marketing" required />
                    <label> I accept the terms of trade (read in new window)</label>
                </div>

                  <button type="submit" className="form__btn flex__start">Checkout</button>
            </Form>
        </>
    )
}