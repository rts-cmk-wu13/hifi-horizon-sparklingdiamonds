
import Breadcrumb from '../../components/breadcrumb/breadcrumb';
import SectionHeader from '../../components/SectionHeader';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import './InvoicePage.scss'

export default function InvoicePage() {   
    const info = JSON.parse(sessionStorage.getItem('paymentInfo'))
    const itemInfo = JSON.parse(sessionStorage.getItem('cart'))

    const today = new Date();
    const options = { 
    weekday: 'long',   // Wednesday
    day: 'numeric',    // 25
    month: 'long',     // July
    year: 'numeric'    // 2025
    };
    const day = today.toLocaleDateString('en-GB', options);
    console.log(day);  // Wednesday, 25 July 2025



    const deliveryPrice = 4
    const totalPrice = itemInfo.reduce((acc, item) => acc + Number(item.price) * Number(item.quantity), 0);
    const vat = totalPrice * .25
    const totalWithDelivery = totalPrice + deliveryPrice + vat ;
    const subTotal = itemInfo.price*itemInfo.quantity




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
                <h3 className='invoice__title'>Invoice</h3>
                <span className='invoice__info'>
                    <p>Order number</p>
                    <p>238475691</p>
                </span>
                <span className='invoice__info'>
                    <p>Date</p>
                    <p>{day}</p>
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
                 <table className="invoice-table">
                    
            <thead>
                <tr >
                <th>Item Description</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                </tr>
            </thead>
                {itemInfo.map((item, index) => {
            const subTotal = item.price * item.quantity;
            return (
                <tbody key={item.id}>
                <tr style={{ backgroundColor: index % 2 === 1 ? '#f0f0f0' : 'transparent' }}>
                    <td>{item.name}</td>
                    <td>{item.currency}{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>{item.currency}{subTotal}</td>  {/* Use the per-item subtotal here */}
                </tr>
                </tbody>
            )
            })}

                </table>  
            </div>

            <div className="invoice total__container">
              
                <div className='invoice__info'>
                    <p >SUBTOTAL:</p>
                    <p className='sub-total'>£ {totalPrice}</p>
                </div>
                <div className='invoice__info'>
                    <p>VAT</p>
                    <p  className='sub-total'>£ {vat}</p>
                </div>
                <div className='invoice__info'>
                    <p >DELIVERY</p>
                    <p className='sub-total'>£ {deliveryPrice}</p>
                </div>

                <div className='invoice__info total'>
                    <p>TOTAL</p>
                    <p className='sub-total'> £ {totalWithDelivery}</p>
                </div>
            </div>

            <span className='rights'>Address: 44 Cow Wynd, Falkirk, Central Region, FK1 1PU | Phone: 0131 556 7901 | Mail: sales@hifi-horizon.com  </span>
        </section>

        </>
    );
}
