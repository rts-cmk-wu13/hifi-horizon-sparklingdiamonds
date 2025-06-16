import { MdEdit } from "react-icons/md";
// import { CgFileDocument } from "react-icons/cg";

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
                <button className="Info__element__btn">
                    {child}
                    <MdEdit />
                    {/* <CgFileDocument /> */}
                </button>
            </section>
        </>
    )
}