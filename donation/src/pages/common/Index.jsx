import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function Index () {
    const navigate = useNavigate();

    // Function to redirect user based on their role 
    // or redirect them to the login page if their not logged in
    function redirect () {   
        const userRole = window.localStorage.getItem('userRole');

        if (userRole == "admin") {
            navigate('/admin');
        } else if (userRole == 'donor') {
            navigate("/donor");
        } else {
            navigate("/login");
        }
    }

    // Run the redirect function once when component is first rendered
    useEffect(redirect, [])

    return <div>Redirecting you in a second</div>
}