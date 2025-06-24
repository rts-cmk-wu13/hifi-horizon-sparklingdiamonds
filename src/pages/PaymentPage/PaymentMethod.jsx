import SectionHeader from "../../components/SectionHeader";
import { FaCcStripe } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcApplePay } from "react-icons/fa";

export default function PaymentMethod() {

    return (
        <section className="payment__method">
            <SectionHeader
            text="Choose payment method"
            style="page__header"
            />

            <div className="form payment__methods">  
                <div className="cards">
                    <input type="radio" name="cards" id="cards" />
                    <FaCcStripe className="icon"/>
                    <FaCcVisa className="icon" />
                    <FaCcMastercard className="icon" />
                    <p>Pay with credit card</p>
                </div>
                <div className="cards">
                    <input type="radio" name="cards" id="cards" />
                    <FaCcPaypal className="icon"/>
                    <p>Pay with Paypal</p>
                </div>
                <div className="cards">
                    <input type="radio" name="cards" id="cards" />
                    <FaCcApplePay className="icon" />
                    <p>Pay with Apple pay</p>
                </div>
            </div>
      

        </section>
    )
}