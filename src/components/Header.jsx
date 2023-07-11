import {PiCaretLeftLight } from "react-icons/pi"
import { useNavigate } from "react-router-dom";
const Header = ({title,subTitle}) => {
    const navigate=useNavigate();
    return (
        <div className="">
               <PiCaretLeftLight className="mb-1" onClick={()=>navigate(-1)}/>
            <h4 className=" text-[18px] font-bold">{title}</h4>
            <h6 className="text-[14px] ">{subTitle}</h6>

        </div>
    )
}
export default Header;