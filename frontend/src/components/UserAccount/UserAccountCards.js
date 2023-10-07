import { useEffect, useState } from "react";

export default function UserAccountCards({ id, title }) {
    const [num, setNum] = useState(0); 
    const randomNumberInRange = (min, max) => { 
        return Math.floor(Math.random() * (max - min + 1)) * (Math.round(Math.random()) ? 1 : -1);
    }; 
    useEffect(() => {
          setNum(randomNumberInRange(10, 10000));
    }, []);

	return (
		<section className="account" key={id}>
            <div className="account-content-wrapper">
                <h3 className="account-title">{title}</h3>
                <p className={num < 0 ? "account-amount negative" : "account-amount"}>${num}</p>
                <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
	)
}