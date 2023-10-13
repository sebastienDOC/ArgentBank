import { useState } from "react";
import CollapseTransactions from "../Transactions/CollapseTransactions";

export default function UserAccountContent({ id, title, amount }) {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen);
    };

	return (
		<section className="account" key={id}>
            <div className="account-content-wrapper">
                <h3 className="account-title">{title}</h3>
                <p className="account-amount">${amount}</p>
                <p className="account-amount-description" >Available Balance</p>
                {isOpen && <CollapseTransactions toggle={toggle} /> }
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button" onClick={toggle}>View transactions</button>
            </div>
        </section>
	)
}