import {useEffect, useState} from "react";
import PostList from "./../components/PostList";
import React from "react";
import PostService from "./../API/PostService";
import {useFetching} from "../components/hooks/useFetching";

const Posts = () => {

    const [posts, setPosts] = useState([])
    const [fetchPosts, isPostsLoading] = useFetching(async () => {
        const posts = await PostService.getAll()
        setPosts(posts)
    })

    useEffect(() => {
        fetchPosts();
    }, [])

    // const createPost = (newPost) => {
    //     setPosts([...posts, newPost])
    // }
    //
    // const removePost = (post) => {
    //     setPosts(posts.filter(p => p.id !== post.id))
    // }

    return (
        <div className="App">
            {/*<PostForm create={createPost}/>*/}
            {isPostsLoading
                ? <h2>Загружаю...</h2>
                : <PostList posts={posts} title={'Список кафедр'}/>
            }
            {/*<PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список кафедр'}/>*/}
        </div>
    );
}

export default Posts;
