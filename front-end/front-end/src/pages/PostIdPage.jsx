import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../components/hooks/useFetching";
import PostService from "../API/PostService";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [fetchPostById, isLoading] = useFetching(async () => {
        const response = await PostService.getById(params.id)
        setPost(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
    }, [])

    return (
        <div>
            {isLoading
                ?
                <h1>Загружаю...</h1>
                :
                <div>
                    <h1 style={{textAlign: "left"}}>{post.id}. {post.title}</h1>
                    <div>{post.body}</div>
                </div>
            }
        </div>
    )
};

export default PostIdPage;