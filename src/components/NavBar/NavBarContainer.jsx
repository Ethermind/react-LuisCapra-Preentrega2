import logo from "../../assets/logo.svg"

const NavbarContainer = ({ children }) => {
    return (
        <nav className="bg-blue-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3">
                    <img src={logo} alt="Logo" />
                </a>
                <div className="md:block w-auto" id="navbar-default">
                    <ul className="flex flex-row space-x-8">
                        {children}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavbarContainer;
