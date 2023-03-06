import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export type HeaderContext = { takeChildren: React.Dispatch<React.SetStateAction<JSX.Element | null>> }

export default function StudentRoute() {
    const [children, setChildren] = useState<JSX.Element | null>(null)
    return (
        <div className="page">
            <Header classNames="bg-white header-shadow" >
                <h2>
                    <Link to='/' className='flex f-gap-p5 f-al-center'>
                        <img src={`/src/assets/icons/logo.svg`} alt="App logo" />
                        <span className="desktop f-s-6 f-w-7">Edu</span>
                    </Link>
                </h2>
                {children}
            </Header>
            <main className="flex centered-flex f-grow">
                <Outlet context={{ takeChildren: setChildren }} />
            </main>
            <Footer />
        </div>
    )
}