import {useEffect, useState} from "react";
import PostList from "./../components/PostList";
import React from "react";
import {useFetching} from "../components/hooks/useFetching";
import DepartmentService from "../API/DepartmentService";

const Posts = () => {

    const [posts, setPosts] = useState([])
    const [fetchPosts, isPostsLoading] = useFetching(async () => {
        const posts = await DepartmentService.getAll()
        setPosts(posts.data)
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
