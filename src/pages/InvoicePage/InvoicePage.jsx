
import Breadcrumb from '../../components/breadcrumb/breadcrumb';
import SectionHeader from '../../components/SectionHeader';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import './InvoicePage.scss'

export default function InvoicePage() {   
    const info = JSON.parse(sessionStorage.getItem('paymentInfo'))
    const itemInfo = JSON.parse(sessionStorage.getItem('cart'))

    const today = new Date();
    const options = { weekday: 'long' }; // 'short' for "Mon", "Tue", etc.
    const dayName = today.toLocaleDateString('en-GB', options);

   console.log(dayName)


    const deliveryPrice = 4
    const totalPrice = itemInfo.reduce((acc, item) => acc + Number(item.price), 0)
    const vat = totalPrice * .25
    const totalWithDelivery = totalPrice + deliveryPrice + vat ;



    return (
        <>
        <Breadcrumb />
        <SectionHeader
        text="Thank you for your order!"
        style="page__header"
        />

        <section className="invoice__container form" >
            <div className="client">
                <h4>{info.fullName}</h4>
                <div className="address">
                    <p>{info.address}</p>
                    <p>{info.city}</p>
                    <p>{info.zip}</p>
                </div>
                <p>{info.country}</p>
                <p>{info.email}</p>
            </div>
            <div className="company">
                <img src="/logo.svg" alt="logo" />
                <div className="company__info">
                    <h4>44 Cow Wynd, Falkirk </h4>
                    <h4>Central Region, FK1 1PU</h4>
                    <p className='company__info'> 0131 556 7901  <span><FaPhoneAlt /></span></p>
                    <p className='company__info'> sparklingdiamondsw13@gmail.com  <span><IoMdMail /></span></p>
                </div>
            </div>
            <div className="invoice">
                <span className='invoice__info'>
                    <p>Order number</p>
                    <p>238475691</p>
                </span>
                <span className='invoice__info'>
                    <p>Date</p>
                    <p>{dayName}</p>
                </span>
                <span className='invoice__info'>
                    <p>Shop</p>
                    <p>342 HIFI Horizon - Falkirk</p>
                </span>
                <span className='invoice__info'>
                    <p>Currency</p>
                    <p>GBP</p>
                </span>
            </div>
            <div className="item__description">
                {itemInfo.map((item) => (
                   <table class="invoice-table">
                    
            <thead key={item.id}>
                <tr>
                <th>Item Description</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>{item.name}</td>
                <td>{item.currency}{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.currency}{item.price*item.quantity}</td>
                </tr>
            </tbody>
            </table>  
                ))}
               
            </div>

            <div className="item__total">
              
                <div className='total__info'>
                    <p className='sub-total'>subtotal:</p>
                    <p>£ {totalPrice}</p>
                </div>
                <div className='total__info'>
                    <p className='sub-total'>DELIVERY</p>
                    <p>£ {deliveryPrice}</p>
                </div>

                <div className='avtive'>
                    <p>TOTAL</p>
                    <p> £ {totalWithDelivery}</p>
                </div>
            </div>

            <span className='rights'>Address: 44 Cow Wynd, Falkirk, Central Region, FK1 1PU | Phone: 0131 556 7901 | Mail: sales@hifi-horizon.com  </span>
        </section>

        </>
    );
}