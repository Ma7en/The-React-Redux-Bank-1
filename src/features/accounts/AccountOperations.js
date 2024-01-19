/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, payLoan, requestLoan, withdraw } from "./accountSlice";
import { createCustomer } from "../customers/customerSlice";

function AccountOperations() {
    const [depositAmount, setDepositAmount] = useState("");
    const [withdrawalAmount, setWithdrawalAmount] = useState("");
    const [loanAmount, setLoanAmount] = useState("");
    const [loanPurpose, setLoanPurpose] = useState("");
    const [currency, setCurrency] = useState("USD");

    const dispatch = useDispatch();
    const {
        loan: cuurentLoan,
        loanPurpose: cuurentLoanPurpose,
        balance,
        isLoading,
    } = useSelector((store) => store.account);

    function handleDeposit() {
        if (!depositAmount) return;

        dispatch(deposit(depositAmount, currency));
        setDepositAmount("");
        setCurrency("USD");
    }

    function handleWithdrawal() {
        if (!withdrawalAmount) return;
        dispatch(withdraw(withdrawalAmount));
        setWithdrawalAmount("");
    }

    function handleRequestLoan() {
        if (!loanAmount || !loanPurpose) return;
        dispatch(requestLoan(loanAmount, loanPurpose));
        setLoanAmount("");
        setLoanPurpose("");
    }

    function handlePayLoan() {
        dispatch(payLoan());
    }

    function handleLogout() {
        window.location.reload(false);
    }

    return (
        <div className="account">
            <div className="container">
                <div className="form">
                    <h2>Your account operations</h2>

                    <div>
                        <div>
                            <label>Deposit</label>
                        </div>
                        <div>
                            <input
                                type="number"
                                value={depositAmount}
                                onChange={(e) =>
                                    setDepositAmount(+e.target.value)
                                }
                                placeholder="Deposit amount"
                            />
                            <select
                                value={currency}
                                onChange={(e) => setCurrency(e.target.value)}
                            >
                                <option value="USD">US Dollar</option>
                                <option value="EUR">Euro</option>
                                <option value="GBP">British Pound</option>
                            </select>

                            <button
                                onClick={handleDeposit}
                                disabled={isLoading}
                            >
                                {isLoading
                                    ? "Converting..."
                                    : `Deposit ${depositAmount}`}
                            </button>
                        </div>
                    </div>

                    <div>
                        <div>
                            <label>Withdraw</label>
                        </div>

                        <div>
                            <input
                                type="number"
                                value={withdrawalAmount}
                                onChange={(e) =>
                                    setWithdrawalAmount(+e.target.value)
                                }
                                placeholder="Withdraw amount"
                            />
                            <button onClick={handleWithdrawal}>
                                Withdraw {withdrawalAmount}
                            </button>
                        </div>
                    </div>

                    <div>
                        <div>
                            <label>Request loan</label>
                        </div>
                        <div>
                            <input
                                type="number"
                                value={loanAmount}
                                onChange={(e) => setLoanAmount(+e.target.value)}
                                placeholder="Loan amount"
                            />
                            <input
                                value={loanPurpose}
                                onChange={(e) => setLoanPurpose(e.target.value)}
                                placeholder="Loan purpose"
                            />
                            <button onClick={handleRequestLoan}>
                                Request loan
                            </button>
                        </div>
                    </div>

                    {cuurentLoan > 0 && (
                        <div>
                            <div>
                                <span>
                                    Pay back ${cuurentLoan} (
                                    {cuurentLoanPurpose})
                                </span>
                            </div>

                            <button onClick={handlePayLoan}>Pay loan</button>
                        </div>
                    )}
                </div>

                <div className="box">
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    );
}

export default AccountOperations;
