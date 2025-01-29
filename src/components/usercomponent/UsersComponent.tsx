import {useEffect, useState} from "react";
import {getUsers} from "../../services/api.service.ts";
import {IUser} from "../../models/user/IUser.ts";
import UserComponent from "./UserComponent.tsx";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect( () => {
        getUsers()
            .then(response => {
                setUsers(response.users)
            })
    }, [])

    return (
        <div>
            {
                users.map(user => <UserComponent key={user.id} item={user}/>)

            }
        </div>
    );
};

export default UsersComponent;