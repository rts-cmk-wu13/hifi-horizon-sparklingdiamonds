import { Outlet } from "react-router";
import ShippingNav from "../../../components/navagationbar/ShippingNav";
import SectionHeader from "../../../components/SectionHeader";



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
            <Outlet/>
            </div>


        </section>
        </>
    )
}