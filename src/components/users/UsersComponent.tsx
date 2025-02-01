import {useEffect} from "react";
import UserComponent from "./UserComponent.tsx";
import {useSearchParams} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {userSliceActions} from "../../redux/slices/user/userSlice.ts";

const UsersComponent = () => {

    const [query] = useSearchParams();

    const {users} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useAppDispatch()

    useEffect( () => {
        const skip = query.get('skip')
        if (skip) {
            const response = dispatch(userSliceActions.getUsersRedux(skip));
            console.log(response)
        }
    }, [query, dispatch])

    return (
        <div>
            {
                users.map(user => <UserComponent key={user.id} item={user}/>)
            }
        </div>
    );
};

export default UsersComponent;