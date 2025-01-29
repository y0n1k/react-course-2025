import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/posts'}>Posts</Link></li>
                <li><Link to={'/users'}>Users</Link></li>
            </ul>
        </div>
    );
};

export default Menu;