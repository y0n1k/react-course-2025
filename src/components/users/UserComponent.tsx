import {IUser} from "../../models/user/IUser.ts";
import {Link} from "react-router-dom";

type UserComponentPropType = {
    item:IUser
}

const UserComponent = ({item}:UserComponentPropType) => {
    return (
        <div>
            <Link to={`/user-details/`+ item.id} state={item}>
                {item.id}. {item.firstName} {item.lastName}
            </Link>
        </div>
    );
};

export default UserComponent;