import { Link } from "react-router"

export default function Success() {

    return (

        <>
        <h1>You have registered correctly!!!</h1>

        <Link to="/login" >
           <p>Go to login page!!</p>
        </Link>
        </>
    
    )
}