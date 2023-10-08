
import './collapse.css'

export default function CollapseInfos({id, title, amount}){
    return(
        <div className={parseInt(amount, 10) > 0 ? "ctn-pos " : "ctn-neg "} key={id}>
            <h3 className='trans-name'>{title}</h3>
            <p className='trans-amount'>{amount} $</p>
            <div className='border'></div>
        </div>
    )
}