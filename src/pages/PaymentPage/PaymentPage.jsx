import './PaymentPage.scss'

import SectionHeader from "../../components/SectionHeader.jsx";
import PaymentInfo from "./PaymentInfo.jsx";
import PaymentOverview from "./PaymentOverview.jsx";
import ShippingMethod from './Shipping/ShippingMethod.jsx';
import PaymentMethod from './PaymentMethod.jsx';


export default function PaymentPage() {   
    return (
    <>
        <SectionHeader
        text="Your info"
        style="page__header"
        />

        <PaymentInfo/>
        <ShippingMethod/>
        <PaymentOverview/>
        <PaymentMethod/>
        
    </>
    );
}