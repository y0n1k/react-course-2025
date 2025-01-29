import {ITodo} from "../models/ITodo.ts";

type TodoComponentProps = {
    item: ITodo
}

const TodoComponent = ({item}:TodoComponentProps) => {
    return (
        <h3>
            {item.id} {item.userId} {item.title}
        </h3>
    );
};

export default TodoComponent;