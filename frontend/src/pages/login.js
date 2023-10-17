import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { signInUser } from "../redux/authSlice"
import Header from '../components/Header/Header';

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {error} = useSelector((state) => state.user)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleSignIn(event) {
    event.preventDefault()
    let userSignIn = {
      email, 
      password
    }
    dispatch(signInUser(userSignIn)).then((result) => {
      if (result.payload) {
        setEmail('')
        setPassword('')
        navigate('/account')
      } else {
        setEmail('')
        setPassword('')
      }
    })
  }

  return (
    <div className='container'>
      <Header />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSignIn}>
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
            <div className="input-remember">
              <label htmlFor="remember-me">Remember me</label>
              <input type="checkbox" id="remember-me" />
            </div>
            <input type='submit' value='Sign In' className="sign-in-button" ></input>
            {error && (
              <div className="alert-error">{error}</div>
            )}
          </form>
          <Link to='/signup'><button className="sign-in-button">Create account</button></Link>
        </section>
      </main>
    </div>
  )
}