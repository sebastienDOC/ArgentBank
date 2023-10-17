import data from '../../data/data.json'
import CollapseTransactionsContent from "./CollapseTransactionsContent"
import './collapse.css'

export default function CollapseTransactions(){
    return(
        <div className='ctn-trans'>
            <div className='ctn-txt'>
                <p>Date</p>
                <p>Description</p>
                <p className='ctn-trans-txt'>Amount</p>
            </div>
            {data[0].transactions.map((data) => 
                <CollapseTransactionsContent
                    description={data.description}
                    title={data.title}
                    category={data.category}
                    img={data.img}
                    amount={data.amount}
                    key={data.id}
                    type={data.type}
                    dateNumber={data.dateNumber}
                    dateLetter={data.dateLetter}
                />
            )}
        </div>
    )
}