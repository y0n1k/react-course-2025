import {FormEvent, useState} from "react";

type IFormProps = {
    name: string
}

const RecipeSearchComponent = () => {
    const [formState, setFormState] = useState<IFormProps>({
        name: ''
    })


    function handler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(e);
        // const form = e.target as HTMLFormElement;
        // console.log(form.name.value)
    }

    function changeHandler(e:FormEvent<HTMLInputElement>) {
e.preventDefault();
const input = e.target as HTMLInputElement;
console.log(input.value)
setFormState({...formState, [input.name]: input.value});
    }


    return (
        <div>
            <hr/>
            <form onSubmit={handler}>
                <label>Пошук</label>
                <input type={"text"} name={"name"} placeholder={"Введіть назва рецепта"} onChange={changeHandler}/>
                <button>Надіслати</button>
            </form>
            <hr/>
        </div>
    );
};

export default RecipeSearchComponent;