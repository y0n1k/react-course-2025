import {Link, useLocation, useParams} from "react-router-dom";
import {IRecipe} from "../../models/recipe/IRecipe.ts";
import {useEffect, useState} from "react";
import {getUserById} from "../../services/api.service.ts";
import {IUser} from "../../models/user/IUser.ts";
import RecipeTagsComponent from "./RecipeTagsComponent.tsx";

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
                    <b>{item.name}</b> <RecipeTagsComponent tags={item.tags}/>
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
                    <Link to={`/user-details/`+ user.id} state={user}>
                        {user.id}. {user.firstName} {user.lastName}
                    </Link>
                </div>
            )}
        </div>

    );
};

export default RecipeDetailsComponent;