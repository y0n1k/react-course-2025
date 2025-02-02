import {useLocation, useParams} from "react-router-dom";
import {IUser} from "../../models/user/IUser.ts";
import {useEffect} from "react";
import RecipeComponent from "../recipes/RecipeComponent.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {recipeSliceActions} from "../../redux/slices/recipe/recipeSlice.ts";

const UserDetailsComponent = () => {
    const {state} = useLocation();
    const item = state as IUser;
    const params = useParams();
    console.log(params);

    const {userId} = useParams<{ userId: string }>();

    const {recipeUserId} = useAppSelector(({recipeSlice}) => recipeSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (userId) {
            const response = dispatch(recipeSliceActions.getRecipesByUserIdRedux(userId))
            console.log('Response ',response)
            console.log('Recipes ', recipeUserId)
        }
    }, [userId, dispatch]);

    return (
        <div>
            <div>
                <h3>{item.firstName} {item.lastName}</h3>
                <img src={item.image} alt=""/>
                <div>
                    Вік: {item.age}
                </div>
                <div>
                    Посада: {item.role}
                </div>
                <div>
                    Дата народження: {item.birthDate}
                </div>
                <div>
                    Місце проживання: {item.address.address} {item.address.city} {item.address.country}
                </div>
            </div>
            <h3>Рецепти користувача {item.firstName} {item.lastName}</h3>
            {
                recipeUserId?.map(recipe => <RecipeComponent item={recipe} key={recipe.id}/>)
            }
        </div>

    );
};

export default UserDetailsComponent;