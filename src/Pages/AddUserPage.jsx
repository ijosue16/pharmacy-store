import { useState } from "react";
import ActionsPagesContainer from "../components/Actions components/ActionsComponent container";
import AddComponent from "../components/Actions components/AddComponent";
import { PiEyeSlashFill,PiEyeFill } from "react-icons/pi";


const AddUserPage = () => {
    const [formval, setFormval] = useState({ firstName: 'Hp victus',lastName:'Computer',userName:'Pc',password:'Hp',phone:'652',email:'4',role:'6',quantity:'22',tax:'2%',discountType:'0%',price:'859£',status:'Available' });
    const [show ,setShow]=useState(false);
    const handleAddproduct = (e) => {
        setFormval({ ...formval, [e.target.name]: [e.target.value] })
    }
    return (
        <div>
            <ActionsPagesContainer title={'Add User'}
                subTitle={'Add/Update user'}
                actionsContainer={<AddComponent component={
                    <div className="flex flex-col gap-3">
                        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 h-fit list-none">
                            <li>
                                <p className="mb-1">First Name</p>
                                <input value={formval.productName || ''} type="text" name="firstName" id="firstName" className="focus:outline-none p-2 border rounded-lg w-full"
                                    onChange={handleAddproduct} />
                            </li>
                            {/* ******* */}
                            <li>
                                <p className="mb-1">last Name</p>
                              
                                <input type="text" name="lastName" id="lastName" className="focus:outline-none p-2 border rounded-lg w-full"value={formval.lastName || ''} onChange={handleAddproduct} />
                            </li>
                            {/* ******* */}
                            <li>
                                <p className="mb-1">User Name</p>
                                <input type="text" name="userName" id="userName" className="focus:outline-none p-2 border rounded-lg w-full"value={formval.userName|| ''} onChange={handleAddproduct} />
                            </li>
                            {/* ******* */}
                            <li>
                                <p className="mb-1">Password</p>
                                <div className=" flex items-center w-full border rounded-lg p-2 justify-between"> 
                                <input type={show?"text":"password"} name="password" id="password" className=" focus:outline-none" value={formval.password || ''} onChange={handleAddproduct} />
                                {show? <PiEyeSlashFill onClick={()=>setShow(!show)}/>:<PiEyeFill onClick={()=>setShow(!show)}/>}
                                </div>
                               
                            </li>
                            {/* ******* */}
                            <li>
                                <p className="mb-1">Phone</p>
                                <input type="number" name="phone" id="phone" className="focus:outline-none p-2 border rounded-lg w-full"value={formval.phone || ''} onChange={handleAddproduct}  />
                            </li>
                            {/* ******* */}
                            <li>
                                <p className="mb-1">Email</p>
                                <input type="email" name="email" id="email" className="focus:outline-none p-2 border rounded-lg w-full" value={formval.email || ''} onChange={handleAddproduct}/>
                            </li>
                            {/* ******* */}
                            <li>
                                <p className="mb-1">Role</p>
                                <input type="text" name="role" id="role" className="focus:outline-none p-2 border rounded-lg w-full" value={formval.role|| ''} onChange={handleAddproduct}/>
                            </li>
                            {/* ******* */}
                           


                        </ul>
                        <span>
                                <p className="mb-1">User image</p>
                                <input type="file" name="userImage" id="userImage" className=" p-2 border rounded-lg w-full h-24" />
                            </span>

                    </div>
                } />} />
        </div>
    )
}
export default AddUserPage;