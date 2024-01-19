import React from "react";

import BalanceDisplay from "../features/accounts/BalanceDisplay";
import Customer from "../features/customers/Customer";

function User() {
    return (
        <>
            <div className="user">
                <div className="container">
                    <div className="box">
                        <Customer />
                        <BalanceDisplay />
                    </div>
                </div>
            </div>
        </>
    );
}

export default User;
