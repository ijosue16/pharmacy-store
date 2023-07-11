import React from "react";
import ActionsPagesContainer from "../components/Actions components/ActionsComponent container";
import AddComponent from "../components/Actions components/AddComponent";

const AddSalesPage=()=>{
    return(
        <>
        <ActionsPagesContainer title={'Add sale'}
        subTitle={'Add your new sale'}
        actionsContainer={<AddComponent
        component={
            <div className="felx flex-col gap-3">
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 h-fit list-none">
                    <li>
                        <p className="mb-1">Customer</p>
                        <select name="customer" id="customer" className="focus:outline-none w-full p-2 border rounded">
                            <option value="andre">andre</option>
                            <option value="Choose customer">Choose customer</option>
                        </select>
                    </li>
                    <li>
                        <p className="mb-1">Date</p>
                        <input type="text" id="date" name="date" className="focus:outline-none w-full p-2 border rounded"/>
                    </li>
                    <li>
                        <p className="mb-1">Suppliers</p>
                        <select name="suppliers" id="suppliers" className="focus:outline-none w-full p-2 border rounded">
                            <option value="klm">klm</option>
                            <option value="Choose customer">Choose customer</option>
                        </select>
                    </li>
                </ul>
                <span>
                    <p className="mb-1">Product name</p>
                    <input type="text" id="productname" name="productname" className="focus:outline-none w-full border p-2 rounded" />
                </span>
                <div>
                    sales-list
                </div>
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 h-fit list-none">
                <li>
                        <p className="mb-1">order Tax</p>
                        <input type="text" id="order Tax" name="order Tax" className="focus:outline-none w-full p-2 border rounded"/>
                    </li>
                    <li>
                        <p className="mb-1">Discount</p>
                        <input type="text" id="discount" name="discount" className="focus:outline-none w-full p-2 border rounded"/>
                    </li>
                    <li>
                        <p className="mb-1">shipping</p>
                        <input type="text" id="shipping" name="shipping" className="focus:outline-none w-full p-2 border rounded"/>
                    </li>
                    <li>
                        <p className="mb-1">Status</p>
                        <select name="status" id="status" className="focus:outline-none w-full p-2 border rounded">
                            <option value="klm">klm</option>
                            <option value="Choose customer">Choose customer</option>
                        </select>
                    </li>
                </ul>
                <div>
                    amount-totals
                </div>

            </div>
        }/>}/>
        </>
    )
}
export default AddSalesPage;