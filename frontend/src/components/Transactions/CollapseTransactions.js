import data from '../../data/data.json'
import CollapseTransactionsContent from "./CollapseTransactionsContent"
import './collapse.css'

export default function CollapseTransactions(){
    return(
        <div className='ctn-trans'>
            <h2>TRANSACTIONS</h2>
            {data[0].transactions.map((data) => 
                <CollapseTransactionsContent
                    title={data.title}
                    amount={data.amount}
                    key={data.id}
                    type={data.type}
                    date={data.date}
                />
            )}
        </div>
    )
}