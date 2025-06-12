import { NavLink,Link } from "react-router"
import HomeButton from "../components/HomeButton"
import { FaArrowRight } from "react-icons/fa";
import Navegation from "../components/Navegation"

export default function Home() {

    return (
    <>
        <header className="header">
           <Navegation />
        </header>
        
        <article className="home">

            <section className="home__logo">
                <img src="/img/emojione_bird.svg" alt="image of a logo" />
                <div className="home__text">
                    <h1 className="home__title">early bird.</h1>
                    <h5>Your local discount mate</h5>
                </div>
            </section>

            <section className="home__buttons">
                <Link to="/signup" >
                <HomeButton
                    text="Sign Up"
                    style="btn btn__signin"
                />
                </Link>

                <Link to="/login" >
                    <HomeButton
                        text="Login"
                        icon={<FaArrowRight />}
                        style="btn btn__login"
                    />
                </Link>
            </section>
        </article>
    </>
       
        
    )
}