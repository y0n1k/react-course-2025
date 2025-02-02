import PaginationComponent from "../pagination/PaginationComponent.tsx";
// import UsersComponent from "../components/users/UsersComponent.tsx";
import {Outlet} from "react-router-dom";
import UserSearchComponent from "../components/users/UserSearchComponent.tsx";

const UsersPage = () => {
    return (
        <div>
            <UserSearchComponent/>
            <Outlet/>
            {/*<UsersComponent/>*/}
            <PaginationComponent/>
        </div>
    );
};

export default UsersPage;