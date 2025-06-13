import { Link } from "react-router"

export default function Thanks() {

    return (
        <>
        <h1>Thank you for contacting us!</h1>
        <p>Emails are checked daily. You should expect a response within the next 24 hours.</p>
        <Link to='/'>
            <p className="primary__color">Go to Home page</p>
        </Link>

        </>
    )
}