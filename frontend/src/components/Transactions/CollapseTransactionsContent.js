import Dropdown from '../Dropdown/Dropdown';
import './collapse.css'
import { useState } from 'react';

export default function CollapseTransactionsContent({id, title, description, category, img, amount, type, dateNumber, dateLetter}){
    // Collapse
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
    // Image
    function getImgCover(cover) {
        let images = require("../../assets" + cover);
        return images;
    }
    // Edit 
    const [showDropdown, setShowDropdown] = useState(false)
    function onClickDropdown() {
        setShowDropdown((showDropdown) => !showDropdown)
    } 
    const [showInput, setShowInput] = useState(false)
    function onClickInput() {
        setShowInput((showInput) => !showInput)
    } 

    return(
        <div className="ctn" key={id}>
            <div className='border'>
                <p className='trans-date number'>{dateNumber}</p>
                <p className='trans-date letter'>{dateLetter}</p>
                <p className='trans-name'>{title}</p>
                <p className={parseInt(amount, 10) > 0 ? "trans-amount positive" : "trans-amount"}>
                    {amount}$ 
                </p>
                <div className='chevron'>
                    <i 
                        className={description ? "fa-solid fa-chevron-down" : "fa-solid fa-chevron-down invisible"} 
                        onClick={click} 
                        style={{ transform: rotate, transition: "all 0.3s ease" }}>
                    </i>
                </div>
                <div className='more' onClick={click}>more</div>
            </div>

            <div className='ctn-content'>
                <div className={!open ? 'invisible' : 'transition'} style={{maxHeight: open ? '50px' : '0px'}}>
                    <p className='left'>Transaction type</p>
                </div>
                <div className={!open ? 'invisible' : 'transition end'} style={{maxHeight: open ? '50px' : '0px'}}>
                    <img src={getImgCover(img)}  className='bank-img'/>
                    <p>{type}</p>
                </div>
                
                <div className={!open ? 'invisible' : 'transition'} style={{maxHeight: open ? '50px' : '0px'}}>
                    <p className='left'>Category</p>
                </div>
                <div className={!open ? 'invisible' : 'transition end'} style={{maxHeight: open ? '50px' : '0px'}}>
                    {!showDropdown ? <p>{category}</p> : null}
                    {!showDropdown ? <i className="fa-solid fa-pen-to-square" onClick={onClickDropdown}></i> : null}
                    {showDropdown ? <Dropdown /> : null}
                    {showDropdown ? <button type='submit' onClick={onClickDropdown}>Submit</button> : null}
                </div>

                <div className={!open ? 'invisible' : 'transition'} style={{maxHeight: open ? '50px' : '0px'}}>
                    <p className='left'>Note</p>
                </div>
                <div className={!open ? 'invisible' : 'transition end'} style={{maxHeight: open ? '50px' : '0px'}}>
                    {!showInput ? <p>{description}</p> : null}
                    {!showInput ? <i className="fa-solid fa-pen-to-square" onClick={onClickInput}></i> : null }
                    {showInput ? <input type='text' name='description'></input> : null}
                    {showInput ? <button type='submit' onClick={onClickInput}>Submit</button> : null}
                </div>

            </div>  
        </div>
    )
}