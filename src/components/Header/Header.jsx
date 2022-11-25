
import User from "../User/User";
import Logo from "../Navbar/Logo/Logo";
import Search from "../Form/search";
import CartWidget from "../CartWidget/CartWidget";
const Header = () => {
    return (
        <div className="hidden w-full h-full sm:flex items-center justify-evenly">
            <Logo />
            <Search />
            <div className="flex w-auto ml-10">
                <User />
                <CartWidget />
            </div>
        </div>
    );
}

export default Header;
