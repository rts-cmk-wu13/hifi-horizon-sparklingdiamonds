import { Outlet } from "react-router";
import ShippingNav from "../../../components/navagationbar/ShippingNav";
import SectionHeader from "../../../components/SectionHeader";
import ClickAndCollect from "./ClickAndCollect";
import HomeDelivery from "./HomeDelivery";


export default function ShippingMethod() {

    return (
        <>
        <section className="shipping__method">

            <SectionHeader
            text="Select your prefered delivery method"
            style="page__header"
            />

            <div className="form">
                <ShippingNav/>
            </div>


        </section>
        </>
    )
}