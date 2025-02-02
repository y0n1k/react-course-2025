import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useEffect} from "react";
import {IUser} from "../../models/user/IUser.ts";
import UserComponent from "./UserComponent.tsx";


const SearchedUsersComponent = () => {

    const {userByName} = useAppSelector(({userSlice}) => userSlice);

    useEffect(() => {
        if (userByName) {
            console.log(userByName)
        }
    }, [userByName]);


    return (
        <div>
            <hr/>
            <h3>Результати пошуку</h3>
            {
                userByName?.users.map((user: IUser) => <UserComponent key={user.id} item={user}/>)

            }
            <hr/>
        </div>
    );
};

export default SearchedUsersComponent;