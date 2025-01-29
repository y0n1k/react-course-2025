import {IPost} from "../../models/post/IPost.ts";

type PostComponentPropType = {
    item: IPost
}

const PostComponent = ({item}:PostComponentPropType) => {
    return (
        <div>
            {item.title}
        </div>
    );
};

export default PostComponent;