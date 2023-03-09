import { Link } from "react-router-dom"
import OAuth from "~/components/OAuth"
import loginStyle from "~/styles/login.module.css"
import loginImage from "~/src/assets/images/login-bg-mid.png"

export default function LoginForm() {
  return (
    <div className={`${loginStyle["login-layout"]}`}>
      <section
        className={`${loginStyle.image}`}
        style={{ backgroundImage: `url(${loginImage})` }}>
      </section>
      <section className={`${loginStyle.main}`}>
        <div className="container">
          <form action="" className="flex-col centered-flex f-gap-1">
            <Link to='/' className='f-gap-p5 centered-flex'>
              <img src={`/src/assets/icons/logo.svg`} alt="App logo" />
              <span className="f-s-6 f-w-7">Edu</span>
            </Link>
            <h3 className="centered-text">Welcome back! Please sign in to your account</h3>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input className="form-element" type="email" name="email" placeholder="example@outlook.com" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input className="form-element" type="password" name="password" id="password" />
            </div>
            <div className="form-group">
              {/* <input className="form-element" type="submit" value={'Sign in'} /> */}
              <Link to={'/teacher'} className="button" type="button" >Sign in</Link>
            </div>
            <div className="form-group end-text">
              <Link to='/forgot-password'>Forgot password?</Link>
            </div>

            <OAuth />

            <div className="form-group centered-text">
              Don't have an account? <Link to='/signup'>Sign up</Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
