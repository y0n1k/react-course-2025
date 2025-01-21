import {simpsons} from "../data/charactersList.ts";
import CharacterComponent from "./CharacterComponent.tsx";
import './components.css'

export const FamilyComponent = () => {
    return(
        <div className={'family'}>
            {
                simpsons.map((value, index) => <CharacterComponent key={index} item={value}>
                    <h4>{value.age}</h4>
                    <img src={value.photo}/>
                    <p>{value.info}</p>
                </CharacterComponent>)
            }
        </div>
    )
}