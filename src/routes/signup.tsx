import { Link } from "react-router-dom"
import OAuth from "../components/OAuth"
import loginStyle from "../styles/login.module.css"
import signupImage from "/src/assets/images/signup-bg-mid.png"

export default function signupForm() {
  return (
    <div className={`${loginStyle["login-layout"]}`}>
      <section
        className={`${loginStyle.image}`}
        style={{ backgroundImage: `url(${signupImage})` }}>
      </section>
      <section className={`${loginStyle.main}`}>
        <div className="container">
          <h2 className="centered-text">
            <Link to='/'>
              Edu
            </Link>
          </h2>
          <form action="">
            <h3 className="centered-text">Create an account</h3>
            <div className="form-group">
              <label htmlFor="email">Full Name</label>
              <input className="form-element" type="text" name="fullName" placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input className="form-element" type="email" name="email" placeholder="example@outlook.com" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input className="form-element" type="password" name="password" />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input className="form-element" type="password" name="confirmPassword" />
            </div>
            <div className="form-group">
              <input className="form-element" type="submit" value={'Create account'} />
            </div>

            <OAuth />

            <div className="form-group centered-text">
              Already have an account? <Link to='/login'>Sign in</Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
