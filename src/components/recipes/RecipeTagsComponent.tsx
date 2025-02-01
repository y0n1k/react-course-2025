import {Link} from "react-router-dom";

type RecipeTagsComponentType = {
    tags: string[]
}

const RecipeTagsComponent = ({tags}: RecipeTagsComponentType) => {
    return (
        <div>
            {
                tags.map((tag, index) => (
                    <Link to={'/recipes/tag/'+tag} key={index}><i>#{tag} </i></Link>
                ))
            }
        </div>
    );
};

export default RecipeTagsComponent;