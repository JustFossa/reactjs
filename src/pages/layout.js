import {Outlet, Link} from 'react-router-dom'

function Layout() {
    return (
<>
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/login">Sign In</Link>
            </li>
            <li>
                <Link to="/users">Users</Link>
            </li>
            <li>
                <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
                <Link to="/createuser">Create User</Link>
            </li>
            <li>
                <Link to="/register">Register</Link>
            </li>
        </ul>
    </nav>
    <Outlet />
</>

    )
}

export default Layout