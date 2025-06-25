import PrimaryButton from "./PrimaryButton"
import { Link } from "react-router"

export default function NewCustomer() {

    return (
       <>
       <div className="newcustomer form">
        <h2>NEW CUSTOMER</h2>
        <p>Creating an account has many benefits: check out faster, track orders and more.</p>

        <Link to="/signup">
            <PrimaryButton
            text="Create an Account"
            style="primary__btn"
            />
        </Link>
       </div>
       </> 
    )
}