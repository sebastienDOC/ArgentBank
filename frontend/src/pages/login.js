import {Link} from 'react-router-dom';

export default function Login() {
    return (
        <main className="main bg-dark">
          <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
              <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />
              </div>
              <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password"/>
              </div>
              <div className="input-remember">
                <label htmlFor="remember-me">Remember me</label>
                <input type="checkbox" id="remember-me" />
              </div>
              <Link to='/user'>
                <button className="sign-in-button">Sign In</button>
              </Link> 
          </section>
        </main>
)}