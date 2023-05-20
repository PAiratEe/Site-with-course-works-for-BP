import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../components/hooks/useFetching";
import DepartmentService from "../API/DepartmentService";

const PostIdPage = () => {
    const params = useParams()
    const [teachers, setTeachers] = useState({})
    const [fetchPostById, isLoading] = useFetching(async () => {
        const response = await ProfessorService.getAllFromDepartment(params.id)
        console.log(response)
        setTeachers(response)
    })

    useEffect(() => {
        fetchPostById();
    }, [])

    return (
        <div>
            {isLoading
                ?
                <h1>Загружаю...</h1>
                :
                <div>
                    <TeacherList posts={teachers} title={"Преподаватели с кафедры"}/>
                </div>
            }
        </div>
    )
};

// const PostIdPage = () => {
//     const params = useParams()
//     const [post, setPost] = useState({})
//     const [fetchPostById, isLoading] = useFetching(async () => {
//         const response = await DepartmentService.getAll();
//         console.log(response)
//         setPost(response.data)
//     })
//
//     useEffect(() => {
//         fetchPostById(params.id)
//     }, [])
//
//     return (
//         <div>
//             {isLoading
//                 ?
//                 <h1>Загружаю...</h1>
//                 :
//                 <div>
//                     <h1 style={{textTransform:"lowercase"}}></h1>
//                 </div>
//             }
//         </div>
//     )
// };

export default PostIdPage;