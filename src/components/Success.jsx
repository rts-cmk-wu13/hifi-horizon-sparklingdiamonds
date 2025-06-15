import { Link } from "react-router"

export default function Success({title, message, link, child}) {

    return (
            
        <section className="succes__page">
            <h1>{title}</h1>
            <p>{message}</p>
        <Link to="/">{link}</Link>
        {child}
        </section>
    )
}