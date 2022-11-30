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
                <h2>Загружаю...</h2>
                :
                <div>
                    <h2>{post.id}. {post.title}</h2>
                    <div>{post.body}</div>
                </div>
            }
        </div>
    )
};

export default PostIdPage;