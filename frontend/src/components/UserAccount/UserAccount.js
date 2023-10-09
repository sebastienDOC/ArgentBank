import data from '../../data/data.json'
import UserAccountCards from './UserAccountCards'
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from '../../redux/authSlice'
import { useEffect, useState } from "react";
import Modal from '../ModalChangeName/ModalChangeName';

export default function UserAccount() {

    let token = localStorage.getItem('token')
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserProfile(token))
    },[])

    let username = useSelector((state) => state.user?.user?.body?.userName)
    let firstname = useSelector((state) => state.user?.user?.body?.firstName)
    let lastname = useSelector((state) => state.user?.user?.body?.lastName)
    let userName = localStorage.setItem('userName', username)

    const [isOpen, setIsOpen] = useState(false);

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back <br /> {firstname} '{username}' {lastname} !</h1>
                <button className="edit-button" onClick={() => setIsOpen(true)}>Edit Username</button>
                {isOpen && <Modal setIsOpen={setIsOpen} />}
            </div>
            <h2 className="sr-only">Accounts</h2>
            {data[0].account.map((data) => 
                <UserAccountCards 
                        title={data.title}
                        amount={data.amount}
                        key={data.id}
                />
            )}
        </main>
    )
}