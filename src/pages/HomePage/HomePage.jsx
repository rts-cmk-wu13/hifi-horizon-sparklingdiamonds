import "./HomePage.scss";
/* import popular from './popularCard.jsx'; */
import { NavLink } from 'react-router';




export default function Home() {

    return (
        <>


            <article className="home">

                <div className="heroImgHome">

                    <img src='/hero.svg' alt="to be hero_img" />
                </div>

                <section className="popularProductSec">
                    <div className="title_btn_box">
                        <h2>POPULAR PRODUCTS</h2>
                        <NavLink to="products"><button className="btn" id="shade">See all products</button></NavLink>
                    </div>
                    <div className="product_container"> 
                        {/* this is  where popular products 
                        get them from the api*/}

                         {/* add popular products here */}

                    <div className="product_box">
                        <img src="/logo.svg" alt="" />
                        <h4>standby product</h4>
                        <h2>price</h2>
                        <button className="btn" id="shade" >button</button>
                     </div>

                      <div className="product_box">
                        <img src="/logo.svg" alt="" />
                        <h4>standby product</h4>
                        <h2>price</h2>
                        <button className="btn" id="shade" >button</button>
                     </div>

                      <div className="product_box">
                        <img src="/logo.svg" alt="" />
                        <h4>standby product</h4>
                        <h2>price</h2>
                        <button className="btn" id="shade" >button</button>
                     </div>

                      <div className="product_box">
                        <img src="/logo.svg" alt="" />
                        <h4>standby product</h4>
                        <h2>price</h2>
                        <button className="btn" id="shade" >button</button>
                     </div>

              
                    </div>
                </section>
                {/* end of popular products section */}

                <section className="OpeningTimeBox">
                    <div className="whatWeDo">
                        <h2>What we do</h2>
                        <p>We look forward to customising a system to meet your needs.</p>
                        <p>We don’t favour one manufacturer over another
                            the only thing we do favour is making sure our customers get the right product that suits their needs
                            and listening preferences. We will ask many questions in order to ensure that what you buy from us is tailored to you and you alone.</p>
                        <p>If you are looking for a product not found in our demonstration showrooms or our online site, don’t fret as we have access to hundreds of brands.</p>
                        <p>
                            One of our biggest pleasures of working in this industry is to see the smile on our customers’ faces when they finally hear and see the system of their dreams.</p>
                    </div>

                    <div className="openHours">
                        <div>
                            <h2>Opening hours</h2>
                            <h4>Edinburgh</h4>
                            <p>2 Joppa Rd,Edinburgh, EH15 2EU</p>
                            <p>Monday to Friday: 10:00am - 5:30pm</p>
                            <p>Saturday: 10:00am - 5:30pm</p>
                            <p>Sunday: Closed</p>
                        </div>

                        <div>
                            <h4>Falkirk</h4>
                            <p>44 Cow Wynd, Falkirk, Central Region, FK1 1PU</p>
                            <p>Monday to Friday: 10:00am - 5:30pm</p>
                            <p>Saturday - By appointment only</p>
                            <p>Sunday: Closed</p>
                        </div>

                    </div>{/* end of opening hours */}
                </section>
                {/* end of what we do and opening hours sectio */}


                <section className="sign_up_sec">

                    <div className="sign_up_box">
                        <h2>SIGN UP FOR OUR NEWSLETTER</h2>
                        <p>Subscribing to our newsletter secures you up to date information about HiFi Horizons latest updates and offers.</p>
                        <div>
                            <input className="signUpInput" type="text"/>
                            {/* replace with the real sign up for newsletter when made */}
                            <input className="btn" id="shade" type="button" value="Sign up" />
                        </div>
                    </div>
                    {/* sign up section */}

                </section>

            </article>
        </>


    )
}