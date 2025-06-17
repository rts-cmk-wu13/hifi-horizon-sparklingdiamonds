import "./HomePage.scss";

export default function Home() {

    return (
        <>


            <article className="home">

                <div className="heroImgHome">

                    <img src='/hero.svg' alt="to be hero_img" />
                </div>
                <section>
                    <h2>POPULAR PRODUCTS</h2>
                    <button></button>
                    <div>
                        {/* add popular products here */}
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


                <section>

                    <div>
                        <p>this is not perm</p>
                        <p>this is not perm</p>
                        <p>this is not perm</p>
                        <p>this is not perm</p>
                        <p>this is not perm</p>
                        <p>this is not perm</p>
                        <p>this is not perm</p>
                        <p>this is not perm</p>
                        <p>this is not perm</p>
                        <p>this is not perm</p>
                        <p>this is not perm</p>

                    </div>
                    {/* sign up section */}
                </section>

            </article>
        </>


    )
}