import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { view } from "../../features/views/viewSlice";

const Landing = () => {
    const fullName = useSelector((state) => state.customer.fullName);

    const dispatch = useDispatch();

    function handleViewFalse() {
        dispatch(view(false));
    }

    return (
        <>
            <div className="landing">
                <div className="container">
                    <div className="box">
                        <h2>Welcome {fullName}</h2>
                        <h2>🏦 The React-Redux Bank ⚛️</h2>
                        {!fullName && (
                            <>
                                <div>
                                    <span>please</span>

                                    <a onClick={handleViewFalse}>LogIn</a>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Landing;
