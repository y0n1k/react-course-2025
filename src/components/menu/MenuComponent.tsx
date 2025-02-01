import {Link} from "react-router-dom";

const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={''}>Головна</Link></li>
                <li><Link to={'/users?skip=0'}>Користувачі</Link></li>
                <li><Link to={'/recipes?skip=0'}>Рецепти</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;