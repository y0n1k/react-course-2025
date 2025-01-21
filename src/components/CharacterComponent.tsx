import {ICharacter} from "../models/character.ts";
import {ReactNode} from "react";
import './components.css'

interface CharacterComponentProps {
    item: ICharacter,
    children: ReactNode,
}

function CharacterComponent({item, children}: CharacterComponentProps) {
    return <div className={'character'}>
        <h3>{item.name} {item.surname}</h3>
        <div>{children}</div>
    </div>
}

export default CharacterComponent;