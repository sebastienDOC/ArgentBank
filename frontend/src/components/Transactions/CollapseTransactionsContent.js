import './collapse.css'
import { useState } from 'react';

export default function CollapseTransactionsContent({id, title, amount, type, date}){
    const [open, setOpen] = useState(false);
    function toggle() {
        setOpen((open) => !open)
    };

    const [rotateArrow, setRotateArrow] = useState(false);
    const handleRotate = () => setRotateArrow(!rotateArrow);
    const rotate = rotateArrow ? "rotate(-180deg)" : "rotate(0)"

    function click() {
        toggle();
        handleRotate();
    }

    return(
        <div className="ctn" key={id}>
            <div className='border'>
                <p className='trans-date'>{date}</p>
                <p className='trans-name'>{type}</p>
                <p className={parseInt(amount, 10) > 0 ? "trans-amount positive" : "trans-amount"}>
                    {amount} $ 
                    <i 
                        className={title ? "fa-solid fa-chevron-down" : "fa-solid fa-chevron-down invisible"} 
                        onClick={click} 
                        style={{ transform: rotate, transition: "all 0.6s ease" }}>
                    </i>
                </p>
                <div></div>
                <div className='transition' style={{maxHeight: open ? '50px' : '0px'}}>{title}</div>
            </div>  
        </div>
    )
}