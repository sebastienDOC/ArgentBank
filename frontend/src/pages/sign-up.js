import { useState } from "react"
import { useDispatch } from "react-redux"
import { signUpUser } from "../redux/authSlice"
import { useNavigate } from "react-router-dom"
import Header from '../components/Header/Header';

export default function SignUp() {
    const [lastName, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    function resetFields() {
        setLastName('')
        setFirstName('')
        setUserName('')
        setEmail('')
        setPassword('')
    }

    function handleSignUp(event) {
        event.preventDefault()
        let userInfos = {
            email, 
            password,
            lastName, 
            firstName,
            userName
        }
        dispatch(signUpUser(userInfos)).then((action) => {
            if (action.payload) {
                resetFields()
                navigate('/login')
            } else {
                resetFields()
            }
          })
    }

    return (
        <div className='container'>
            <Header />
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign Up</h1>
                    <form onSubmit={handleSignUp} >
                        <div className="input-wrapper">
                            <label htmlFor="email">E-mail</label>
                            <input 
                                type="email" 
                                id="email" 
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                autoComplete="off"
                                required />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="lastname">Lastname</label>
                            <input 
                                type="text" 
                                id="lastname" 
                                value={lastName}
                                onChange={(event) => setLastName(event.target.value)}
                                required />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="firstname">Firstname</label>
                            <input 
                                type="text" 
                                id="firstname" 
                                value={firstName}
                                onChange={(event) => setFirstName(event.target.value)}
                                required />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input 
                                type="text" 
                                id="username" 
                                value={userName}
                                onChange={(event) => setUserName(event.target.value)}
                                required />
                        </div>
                        <input type='submit' value='Sign Up' className="sign-in-button"></input>
                    </form>
                </section>
            </main>
        </div>
    )
}