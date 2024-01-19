import React from "react";
import { useDispatch } from "react-redux";
import { view } from "../../features/views/viewSlice";
import { useSelector } from "react-redux";

const Header = () => {
    const fullName = useSelector((state) => state.customer.fullName);
    const dispatch = useDispatch();

    function handleViewFalse() {
        dispatch(view(false));
    }
    function handleViewTrue() {
        dispatch(view(true));
    }

    return (
        <>
            <header className="header">
                <div className="container">
                    <ul className="nav">
                        <li>
                            <a onClick={handleViewTrue}>Home</a>
                        </li>
                        <li>
                            <a onClick={handleViewFalse}>
                                {fullName ? "Acount" : "Login"}
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
};

export default Header;
