import PaginationComponent from "../pagination/PaginationComponent.tsx";
import UsersComponent from "../components/users/UsersComponent.tsx";

const UsersPage = () => {
    return (
        <div>
            <UsersComponent/>
            <PaginationComponent/>
        </div>
    );
};

export default UsersPage;