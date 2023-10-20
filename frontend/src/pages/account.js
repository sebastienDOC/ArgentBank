import Header from "../components/Header/Header";
import data from '../data/data.json'
import UserAccountContent from "../components/UserAccount/UserAccountContent";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../redux/authSlice";
import { useEffect, useState } from "react";
import Modal from "../components/ModalChangeName/ModalChangeName";

export default function User() {
    let token = useSelector((state) => state.user?.token)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserProfile(token))
    },[])

    let username = useSelector((state) => state.user?.user?.body?.userName)
    let firstname = useSelector((state) => state.user?.user?.body?.firstName)
    let lastname = useSelector((state) => state.user?.user?.body?.lastName)

    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className='container'>
            <Header />
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back <br /> {firstname} '{username}' {lastname} !</h1>
                    <button className="edit-button" onClick={() => setIsOpen(true)}>Edit Username</button>
                    {isOpen && <Modal setIsOpen={setIsOpen} />}
                </div>
                <h2 className="sr-only">Accounts</h2>
                {data[0].account.map((data) => 
                    <UserAccountContent 
                            title={data.title}
                            amount={data.amount}
                            status={data.status}
                            id={data.id}
                            key={data.id}
                    />
                )}
            </main>
        </div>
    )
}