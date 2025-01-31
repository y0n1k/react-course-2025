import MenuComponent from "../components/menu/MenuComponent.tsx";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            home page
            <MenuComponent/>
            <Outlet/>
        </div>
    );
};



export default MainLayout;