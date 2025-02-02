import {Link} from "react-router-dom";

const MenuComponent = () => {
    return (
        <div>
            <h3>Menu</h3>
            <ul>
                <li><Link to={''}>Головна</Link></li>
                <li><Link to={'/users/all-users?skip=0'}>Користувачі</Link></li>
                <li><Link to={'/recipes/all-recipes?skip=0'}>Рецепти</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;