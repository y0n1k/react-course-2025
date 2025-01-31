import {useLocation, useParams} from "react-router-dom";
import {IRecipe} from "../../models/recipe/IRecipe.ts";
import {useEffect, useState} from "react";
import {getUserById} from "../../services/api.service.ts";
import {IUser} from "../../models/user/IUser.ts";

const RecipeDetailsComponent = () => {
    const {state} = useLocation();
    const item = state as IRecipe;
    const {userId} = useParams<{ userId: string }>();
    const [user, setUser] = useState<IUser>();
    console.log(userId)
    useEffect(():void => {
        if (userId) {
            getUserById(userId).then(setUser)
        }
    }, [userId]);
    return (
        <div>
            <div>
                <div>
                    <b>{item.name}</b> {item.tags}
                </div>
                <div>
                    Інгридієнти: {item.ingredients}
                </div>
                <div>
                    Інструкція: {item.instructions}
                </div>
            </div>
            {user && (
                <div>
                    <h3>Автор рецепту:</h3>
                    <p>{user.firstName} {user.lastName}, {user.age} років</p>
                    <p>Роль: {user.role}</p>
                </div>
            )}
        </div>

    );
};

export default RecipeDetailsComponent;