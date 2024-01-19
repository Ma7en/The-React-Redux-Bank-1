/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";

import CreateCustomer from "./features/customers/CreateCustomer";
// import Customer from "./features/customers/Customer";
// import BalanceDisplay from "./features/accounts/BalanceDisplay";
import AccountOperations from "./features/accounts/AccountOperations";
import { DarkModeProvider } from "./context/DarkModeContext";
import GlobalStyles from "./styles/GlobalStyles";
import Logo from "./ui/logo/Logo";
import Header from "./ui/header/Header";
import User from "./pages/User";
import Landing from "./ui/Landing/Landing";

function App() {
    const fullName = useSelector((state) => state.customer.fullName);
    const view = useSelector((state) => state.view.view);
    // console.log(`view:-`, view);

    return (
        <>
            <DarkModeProvider>
                <GlobalStyles />

                <div className="appbank">
                    <Logo />
                    <Header />
                    {view === true && <Landing />}
                    {view === false && !fullName && <CreateCustomer />}
                    {view === false && fullName && (
                        <>
                            <User />
                            <AccountOperations />
                        </>
                    )}
                </div>

                {/* <div>
                    {fullName === "" ? (
                        <CreateCustomer />
                    ) : (
                        <>
                            <Customer />
                            <AccountOperations />
                            <BalanceDisplay />
                        </>
                    )}
                </div> */}
            </DarkModeProvider>
        </>
    );
}

export default App;
