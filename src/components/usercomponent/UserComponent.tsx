import {IUser} from "../../models/user/IUser.ts";

type UserComponentPropType = {
    item:IUser
}

const UserComponent = ({item}:UserComponentPropType) => {
    return (
        <div>
            {item.firstName} {item.lastName}
        </div>
    );
};

export default UserComponent;