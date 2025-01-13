import {simpsons} from "../data/charactersList.ts";
import {ICharacter} from "../models/character.ts";

function CharacterComponent() {
    return <h2>
        {
            simpsons.map((simpson:ICharacter) => (
                <div>
                    <h2>{simpson.name}</h2>
                    <h2>{simpson.surname}</h2>
                    <h2>{simpson.age}</h2>
                    <h2>{simpson.info}</h2>
                    <img src={simpson.photo} alt={simpson.name}/>
                </div>
            ))
        }
    </h2>
}

export default CharacterComponent;