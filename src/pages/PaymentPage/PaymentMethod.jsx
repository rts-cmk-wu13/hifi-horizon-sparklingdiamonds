import SectionHeader from "../../components/SectionHeader";
import { FaCcStripe } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";

export default function PaymentMethod() {

    return (
        <section className="payment__method">
            <SectionHeader
            text="Choose payment method"
            style="page__header"
            />

            <div className="form">
                <ul>
                    <li>
                        <div className="payment__methods">
                            <input type="radio" name="cards" id="cards" checked/>
                            <div className="cards">
                                <FaCcStripe />
                                <FaCcVisa />
                                <FaCcMastercard />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

        </section>
    )
}