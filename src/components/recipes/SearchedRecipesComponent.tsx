import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";


const SearchedRecipesComponent = () => {

    const {recipeName} = useAppSelector(({recipeSlice}) => recipeSlice);

    if (recipeName) {
        console.log(recipeName)
    }

    return (
        <div>
            Searched component
        </div>
    );
};

export default SearchedRecipesComponent;