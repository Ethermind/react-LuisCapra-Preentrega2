import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg"

const NavbarContainer = ({children}) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/")
    }

    return (
        <nav className="bg-blue-900">
            <div className="flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center" onClick={handleClick}>
                    <img src={logo} alt="Logo" />
                </a>
                <div className="w-full w-auto">
                    <ul className="flex flex-row p-0 mt-0  space-x-8">
                        {children}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavbarContainer;
