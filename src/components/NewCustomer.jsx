import PrimaryButton from "./PrimaryButton"

export default function NewCustomer() {

    return (
       <>
       <div className="newcostumer card">
        <h2>NEW CUSTOMER</h2>
        <p>Creating an account has many benefits: check out faster, track orders and more.</p>
        <PrimaryButton
        text="Create an Account"
        style="primary__btn"
        />
       </div>
       </> 
    )
}