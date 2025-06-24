import './PaymentPage.scss'
import SectionHeader from "../../components/SectionHeader.jsx";
import PaymentInfo from "./PaymentInfo.jsx";
import PaymentOverview from "./PaymentOverview.jsx";


export default function PaymentPage() {   
    return (
    <>
        <SectionHeader
        text="Your info"
        style="page__header"
        />

        <PaymentOverview/>
        
        <PaymentInfo/>

       


    </>
    );
}