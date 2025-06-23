
 "../pages/Profile/EditProfile";


export default function InfoElement({icon,child,elementName,elementInfo,addressChild}) {

    return (
        <>
            <section className='info__row'>
                <div className="info__element">
                    {icon}

                    <div>
                        <p className="element__bold">{elementName}</p>
                        <p>{elementInfo}</p>
                        {addressChild}
                    </div>
                </div>
               
            </section>
        </>
    )
}