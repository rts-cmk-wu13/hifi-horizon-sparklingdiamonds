import './PaymentPage.scss'

import Breadcrumb from '../../components/breadcrumb/breadcrumb.jsx';

import SectionHeader from "../../components/SectionHeader.jsx";
import PaymentInfo from "./PaymentInfo.jsx";
import PaymentOverview from "./PaymentOverview.jsx";
import ShippingMethod from './Shipping/ShippingMethod.jsx';
import PaymentMethod from './PaymentMethod.jsx';


export default function PaymentPage() {   
    return (
    <>
        <Breadcrumb />
        <SectionHeader
        text="Your info"
        style="page__header"
        />

        <PaymentInfo/>
        <ShippingMethod/>
        <PaymentMethod/>
        <PaymentOverview/>
        
    </>
    );
}