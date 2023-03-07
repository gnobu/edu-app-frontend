import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"

export default function LandingPage() {
    return (
        <div className="page">
            <Header classNames="bg-sec header-shadow">
                <>
                    <h2>
                        <Link to='/' className='flex f-gap-p5 f-al-center'>
                            <img src={`/src/assets/icons/logo.svg`} alt="App logo" />
                            <span className="f-s-6 f-w-7">Edu</span>
                        </Link>
                    </h2>
                    <Link className="button" to={'/getin'}>Get in</Link>
                </>
            </Header>
            <main className="container f-grow">
                <div className="W-50 desc">
                    <h1>Edu Test App</h1>
                    <p>Because why waste time marking 100 students' tests?</p>
                </div>
            </main>
            <Footer />
        </div>
    )
}