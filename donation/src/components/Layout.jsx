import { Outlet } from "react-router-dom";
import { NavBar } from ".";
import { TitleBar } from ".";

export function Layout () {
    return (
        <div className="flex h-screen">
            <div className="h-full w-1/6 fixed top-0 left-0">
                <NavBar/>
            </div>
            <div className="w-full pl-[16.6666%]">
                <TitleBar />
                <Outlet className="h-9/10"/>
            </div>
        </div>
    )
}