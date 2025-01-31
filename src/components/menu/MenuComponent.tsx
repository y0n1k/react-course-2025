import {Link} from "react-router-dom";

const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={''}>Головна</Link></li>
                <li><Link to={'/users'}>Користувачі</Link></li>
                <li><Link to={'/recipes'}>Рецепти</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;