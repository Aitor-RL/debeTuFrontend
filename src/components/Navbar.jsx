import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="flex gap-4 mb-4">
            <Link to="/"> Home </Link>
            <Link to="/chat"> Chat </Link>
            <Link to="/userList"> Usuarios </Link>
            <Link to="/register"> Registrarse </Link>
            <Link to="/login"> Login </Link>
            <Link to="/me"> Mis datos </Link>
            <Link to="/myDebtors"> Mis deudores </Link>
            <Link to="/myCreditors"> Mis acreedores </Link>
        </nav>
    )
}
export default Navbar