import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {NameValidator} from "../../validators/recipe.name.validator.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx"
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useNavigate} from "react-router-dom";
import {userSliceActions} from "../../redux/slices/user/userSlice.ts";

type IFormProps = {
    name: string
}

const UserSearchComponent = () => {

    const {userByName} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const {
        handleSubmit,
        register,
        formState: {isValid}
    } = useForm<IFormProps>({
        mode: 'all',
        resolver: joiResolver(NameValidator)
    });

    const onSubmit = async (formDataProps: IFormProps) => {
        console.log(formDataProps);
        const name = formDataProps.name;
        dispatch(userSliceActions.getUsersByNameRedux(name))
        console.log(userByName)
        navigate("search-results");
    };

    const showAll = () => navigate("all-users")

    return (
        <div>
            <hr/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Пошук
                    <input type={"text"} {...register('name')} placeholder={"Введіть назва рецепта"}/>
                </label>
                <button disabled={!isValid}>Надіслати</button>
            </form>
            <button onClick={showAll}>Показати всіх користувачів</button>
            <hr/>
        </div>
    );
};

export default UserSearchComponent;