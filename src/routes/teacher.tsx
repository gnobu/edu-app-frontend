import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
    return (
        <div className="flex f-gap-1">
            <Sidebar />
            <main className="f-grow">
                <Outlet />
            </main>
        </div>
    )
}
