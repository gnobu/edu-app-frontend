import { Link } from "react-router-dom"
import Header from "~/components/Header"
import UserCard from "~/components/UserCard"
import studentSVG from "~/assets/icons/ph_student.svg"
import teacherSVG from "~/assets/icons/ph_chalkboard-teacher.svg"
import Footer from "~/components/Footer"
import "~/styles/account.css"

export default function AccountRoute() {
    return (
        <div className={`page account-page`}>
            <Header classNames="bg-sec header-shadow" >
                <h2>
                    <Link to='/' className='flex f-gap-p5 f-al-center'>
                        <img src={`/src/assets/icons/logo.svg`} alt="App logo" />
                        <span className="f-s-6 f-w-7">Edu</span>
                    </Link>
                </h2>
            </Header>
            <main className="centered-text f-grow">
                <h1 className='desc'>Choose your acount type</h1>
                <div className="account-actions">
                    <UserCard iconSrc={teacherSVG} userType="teacher" />
                    <UserCard iconSrc={studentSVG} userType="student" />
                </div>
            </main>
            <Footer />
        </div>
    )
}
