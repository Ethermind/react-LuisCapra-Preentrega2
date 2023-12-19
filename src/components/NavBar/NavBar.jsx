import NavLink from "./NavLink";
import CartIcon from "../CartIcon/CartIcon";
import NavbarContainer from "./NavBarContainer";
import { useEffect, useState } from "react";
import getCategories from "../../utils/getCategories";

const NavBar = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getCategories().then((data) => {
            setItems(data);
        });
    }, []);

    return (
        items && (
            <NavbarContainer>
                {items.map(item => <NavLink key={item.id} categoryId={item.id} text={item.name} />)}
                <CartIcon></CartIcon>
            </NavbarContainer>
        )
    );
};

export default NavBar;
