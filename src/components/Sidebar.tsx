import { useRef } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import "../styles/dashboard.css"
import IconText from "./IconText"
import noAvatar from "../assets/images/no-avatar-2.svg"
import useTheme from "../hooks/useTheme"

export default function Sidebar() {
    const [theme, setTheme] = useTheme()

    const sidebar = useRef<HTMLElement>(null)
    function toggleSidebar() {
        sidebar.current?.toggleAttribute('aria-collapsed')
    }

    const { pathname } = useLocation()
    const isOverview = /(\/teacher)$/.test(pathname)
    
    return (
        <header ref={sidebar} className="sidebar desktop sticky-top flex-col bg-white col-grey">
            <button onClick={toggleSidebar} className="hamburger bg-white col-grey">
                <IconText src={"/src/assets/icons/left.svg#img"} size={"xs"} />
            </button>
            <section className="h-100">
                <div className="padding-full">
                    <Link to='/' className='flex f-gap-p5 f-al-center'>
                        <img src={`/src/assets/icons/logo.svg`} alt="App logo" />
                        <span className="full f-s-6 f-w-7">Edu</span>
                    </Link>
                </div>
                <hr className="m-blk-4 w-100" />
                <p className="padding-full f-s-3">MENU</p>
                <nav className="flex-col f-s-5">
                    <NavLink to={'overview'}
                        className={({ isActive }) => isActive || isOverview ? "nav-link m-blk-2 selected" : "nav-link m-blk-2"}>
                        <IconText src={"/src/assets/icons/overview.svg#img"} element={<span className='full'>Overview</span>} />
                    </NavLink>
                    <NavLink to={'calendar'}
                        className={({ isActive }) => isActive ? "nav-link m-blk-2 selected" : "nav-link m-blk-2"}>
                        <IconText src={"/src/assets/icons/calendar.svg#img"} element={<span className='full'>Calendar</span>} />
                    </NavLink>
                    <NavLink to={'courses'}
                        className={({ isActive }) => isActive ? "nav-link m-blk-2 selected" : "nav-link m-blk-2"}>
                        <IconText src={"/src/assets/icons/course.svg#img"} element={<span className='full'>Courses</span>} />
                    </NavLink>
                    <NavLink to={'drafts'}
                        className={({ isActive }) => isActive ? "nav-link m-blk-2 selected" : "nav-link m-blk-2"}>
                        <IconText src={"/src/assets/icons/draft.svg#img"} element={<span className='full'>Drafts</span>} />
                    </NavLink>
                    <NavLink to={'profile'}
                        className={({ isActive }) => isActive ? "nav-link m-blk-2 selected" : "nav-link m-blk-2"}>
                        <IconText src={"/src/assets/icons/profile.svg#img"} element={<span className='full'>Profile</span>} />
                    </NavLink>
                </nav>
            </section>
            <section className="f-s-4">
                <hr className="m-blk-5 w-100" />
                <div className="nav-link m-blk-4 bg-grey col-black flex flex-btwn">
                    <button
                        onClick={() => setTheme('light')}
                        className={`small theme-picker ${theme === 'light' ? 'active' : ''}`}>
                        <IconText src={"/src/assets/icons/sun.svg#img"} element={<span className='full'>Light</span>} size={'xs'} />
                    </button>
                    <button
                        onClick={() => setTheme('dark')}
                        className={`small theme-picker ${theme === 'dark' ? 'active' : ''}`}>
                        <IconText src={"/src/assets/icons/moon.svg#img"} element={<span className='full'>Dark</span>} size={'xs'} />
                    </button>
                </div>
                <div className="nav-link m-blk-4 flex f-al-center flex-btwn">
                    <IconText src={"/src/assets/icons/notification-bing.svg#img"}
                        element={<span className='full'>Notifications</span>} size={'small'} />
                    <div className="badge full f-s-3 bg-warn col-white">{3}</div>
                </div>
                <div className="padding-full m-blk-4 flex flex-btwn f-al-center">
                    <div className="flex f-gap-1">
                        <img src={noAvatar} alt="user picture" height={36} width={36} />
                        <div className="flex-col full">
                            <span className="f-s-3 f-w-7 col-black">John Monday</span>
                            <span className="f-s-3">University of Uyo</span>
                        </div>
                    </div>
                    <div className="full">
                        <IconText src={"/src/assets/icons/down.svg#img"} />
                    </div>
                </div>
                {/* <div className="nav-link m-blk-4">
                    <IconText src={"/src/assets/icons/export.svg#img"}
                    element={<span className='full'>Logout</span>} />
                </div> */}
            </section>
        </header>
    )
}
