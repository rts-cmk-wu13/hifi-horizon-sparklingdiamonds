import { Link } from "react-router"
import Success from "../../components/Success"

export default function SuccessfulRegistration() {

    return (

        <>
          <Success
          title="Successful Registration"
          message="You can now view your profile and purchase history."
          />
          <Link to="/profile">Go to my profile</Link>
        </>
    
    )
}