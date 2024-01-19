import { useSelector } from "react-redux";

function Customer() {
    const customer = useSelector((store) => store.customer.fullName);

    return (
        <>
            <div>
                <h2>👋 Welcome, {customer}</h2>
            </div>
        </>
    );
}

export default Customer;
