import {useLocation, useParams} from "react-router-dom";
import {IUser} from "../../models/user/IUser.ts";
import {IRecipe} from "../../models/recipe/IRecipe.ts";
import {useEffect, useState} from "react";
import {getRecipesByUserId} from "../../services/api.service.ts";

const UserDetailsComponent = () => {
    const {state} = useLocation();
    const item = state as IUser;
    const params = useParams();
    console.log(params);

    const {userId} = useParams<{ userId: string }>();
    const [recipes, setRecipes] = useState<IRecipe[]>([]);

    useEffect(() => {
        if (userId) {
            getRecipesByUserId(userId).then(setRecipes);
        }
    }, [userId]);
    console.log(recipes)
    return (
        <div>
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

        </div>

    );
};

export default UserDetailsComponent;