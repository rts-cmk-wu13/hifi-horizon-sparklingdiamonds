import { Form } from "react-router"
import '../ContactPage/contact.scss';

export default function PaymentOverview() {

      const cartInfo = JSON.parse(sessionStorage.getItem('cart'))
      console.log(cartInfo); 
      const deliveryPrice = 4


    return (
        <>

         <section className="my__cart form">

        <h2>Payment overview</h2>
            <div>
                {cartInfo.map((item) => (
                    <div  className="cart__item" key={item.id}>
                        <p>{item.name}</p>
                        <p><span>{item.currency}</span>{item.price}</p>
                    </div>
                ))}
               <p className="price">
                    Price  <span className="total">  £  {cartInfo.reduce((acc, item) => acc + Number(item.price), 0).toLocaleString()}
                    </span>
                </p>
            </div>

    <div className="payment__shipping">      
        <div className="cart__item">
            <p>Delivery price</p>
            <span>£ {deliveryPrice}</span>
        </div>
        <div className="cart__item">
            <p>VAT</p>
            <span> £ {(cartInfo.reduce((acc, item) => acc + Number(item.price) , 0).toLocaleString()) * 250}</span>
        </div>

        <p className="price">
            Price  <span className="total">  £  {cartInfo.reduce((acc, item) => acc + Number(item.price) + deliveryPrice, 0).toLocaleString()}</span>
        </p>
                   
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

//acc: accumulator (running total)

//Number(item.price): converts price to number in case it's a string

//.toLocaleString(): formats the number with commas (e.g., 9,598)