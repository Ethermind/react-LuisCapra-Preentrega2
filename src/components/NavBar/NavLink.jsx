const NavLink = ({ categoryId, text }) => {
    return (
        <li>
            <a href={`/items/${categoryId}`} className="text-gray-100 hover:bg-gray-600 text-center">
                {text}
            </a>
        </li>
    );
};

export default NavLink;
