import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "./customerSlice";
import { view } from "../../features/views/viewSlice";

function Customer() {
    const [fullName, setFullName] = useState("");
    const [nationalId, setNationalId] = useState("");

    const dispatch = useDispatch();

    function handleClick() {
        if (!fullName || !nationalId) return;
        dispatch(createCustomer(fullName, nationalId));
    }
    function handleViewTrue() {
        dispatch(view(true));
    }

    return (
        <>
            <div className="create">
                <div className="container">
                    <div className="form">
                        <h2>Create new customer</h2>
                        <div>
                            <label>Customer full name</label>
                            <input
                                type="text"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </div>

                        <div>
                            <label>National ID</label>

                            <input
                                type="text"
                                value={nationalId}
                                onChange={(e) => setNationalId(e.target.value)}
                            />
                        </div>

                        <div>
                            <button onClick={handleViewTrue}>Back</button>
                            <button onClick={handleClick}>Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Customer;
