import {useForm} from "react-hook-form";

type IFormProps = {
    name: string
}

const RecipeSearchComponent = () => {
    const {handleSubmit, register} = useForm<IFormProps>()

    return (
        <div>
            <hr/>
            <form onSubmit={handleSubmit((formDataProps: IFormProps) => {
                console.log(formDataProps);
            })}>
                <label>Пошук</label>
                <input type={"text"} {...register('name')} placeholder={"Введіть назва рецепта"}/>
                <button>Надіслати</button>
            </form>
            <hr/>
        </div>
    );
};

export default RecipeSearchComponent;