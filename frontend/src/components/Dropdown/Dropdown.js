import { useState } from "react";
import data from '../../data/data.json'
import pen from '../../assets/pen.webp'

export default function Dropdown() {
    const [category, setCategory] = useState('');

    return (
        <div className="dropdown">
            <select 
                value={category} 
                onChange={(event) => setCategory(event.target.value)}
            >
                {data[0].categories.map((data, idx) => 
                    <option key={idx}>{data}</option>
                )}
            </select>
        </div>
    );
}