
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

export default function GoBackBtn() {

    return (

        <div className="login__header">
             <Link to="/" className="goback__container" >
                <button className="btn_goback btn__signin"><FaArrowLeft /></button>
            </Link>
        </div> 
        
    )
}