import {useLocation} from "react-router-dom";
import {IUser} from "../../models/user/IUser.ts";

const UserDetailsComponent = () => {
    const {state} = useLocation();
    const item = state as IUser;
    return (
        <div>
            <div>
                {item.firstName} {item.lastName}
            </div>
            <div>
                Вік: {item.age}
            </div>
            <div>
               Посада: {item.role}
            </div>
        </div>

    );
};

export default UserDetailsComponent;