import {useEffect, useState} from "react";
import {IPost} from "../../models/post/IPost.ts";
import {getPosts} from "../../services/api.service.ts";
import PostComponent from "./PostComponent.tsx";

const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect( () => {
        getPosts()
            .then(response => {
                setPosts(response.posts)
            })
    }, [])

    return (
        <div>
            {
                posts.map(post => <PostComponent key={post.id} item={post}/>)

            }
        </div>
    );
};

export default PostsComponent;