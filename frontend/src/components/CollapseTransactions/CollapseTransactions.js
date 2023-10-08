import data from '../../data/data.json'
import CollapseInfos from "./CollapseCards"
import './collapse.css'

export default function CollapseTransactions(){
    return(
        <section className='ctn-trans'>
            {data[0].transactions.map((data) => 
                <CollapseInfos
                    title={data.title}
                    amount={data.amount}
                    key={data.id}
                />
            )}
        </section>
    )
}