import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {recipeNameValidator} from "../../validators/recipe.name.validator.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx"
import {recipeSliceActions} from "../../redux/slices/recipe/recipeSlice.ts";

type IFormProps = {
    name: string
}

const RecipeSearchComponent = () => {

    const dispatch = useAppDispatch();

    const {
        handleSubmit,
        register,
        formState: {errors, isValid}
    } = useForm<IFormProps>({
        mode: 'all',
        resolver: joiResolver(recipeNameValidator)
    });

    const onSubmit = async (formDataProps: IFormProps) => {
        console.log(formDataProps);
        const name = formDataProps.name;
        dispatch(recipeSliceActions.getRecipesByNameRedux(name))
    };


    return (
        <div>
            <hr/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Пошук
                    <input type={"text"} {...register('name')} placeholder={"Введіть назва рецепта"}/>
                    {errors.name && <div>{errors.name.message}</div>}
                </label>
                <button disabled={!isValid}>Надіслати</button>
            </form>
            <hr/>
        </div>
    );
};

export default RecipeSearchComponent;