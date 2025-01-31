import {useEffect, useState} from "react";
import UserComponent from "./UserComponent.tsx";
import {IUser} from "../../models/user/IUser.ts";
import {getUsers} from "../../services/api.service.ts";
import {useSearchParams} from "react-router-dom";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    const [query] = useSearchParams();
    useEffect( () => {
        const skip = query.get('skip')
        getUsers(skip || '0')
            .then(value => {
                setUsers(value.users)
            })
    }, [query])

    return (
        <div>
            {
                users.map(user => <UserComponent key={user.id} item={user}/>)
            }
        </div>
    );
};

export default UsersComponent;