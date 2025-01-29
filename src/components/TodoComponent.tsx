import {ITodo} from "../models/ITodo.ts";

type TodoComponentProps = {
    item: ITodo
}

const TodoComponent = ({item}:TodoComponentProps) => {
    return (
        <div>
            <h3>{item.id} {item.userId} {item.title} {item.completed}</h3>
        </div>
    );
};

export default TodoComponent;