import {useLocation, useParams} from "react-router-dom";
import {IRecipe} from "../../models/recipe/IRecipe.ts";
import {useEffect} from "react";
import RecipeTagsComponent from "./RecipeTagsComponent.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {userSliceActions} from "../../redux/slices/user/userSlice.ts";
import UserComponent from "../users/UserComponent.tsx";

const RecipeDetailsComponent = () => {
    const {state} = useLocation();
    const item = state as IRecipe;
    const {userId} = useParams<{ userId: string }>();
    console.log(userId)

    const {userById} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useAppDispatch();

    useEffect((): void => {
        if (userId) {
            const response = dispatch(userSliceActions.getUsersByIdRedux(userId));
            console.log(response)
            console.log(userById)
            console.log(userById?.users)
        }
    }, [userId, dispatch]);
    return (
        <div>
            <div>
                <div>
                    <b>{item.name}</b> <RecipeTagsComponent tags={item.tags}/>
                </div>
                <div>
                    Складність: {item.difficulty}
                </div>
                <div>
                    Час: {item.prepTimeMinutes} хв. підготовки + {item.cookTimeMinutes} хв. готування
                </div>
                <div>
                    Інгридієнти: {item.ingredients}
                </div>
                <div>
                    Інструкція: {item.instructions}
                </div>
            </div>
            {
                <div>
                    <h3>Автор рецепту:</h3>
                    {
                            userById?.users.map(user => <UserComponent key={user.id} item={user}/>)
                    }
                </div>
            }
        </div>

    );
};

export default RecipeDetailsComponent;