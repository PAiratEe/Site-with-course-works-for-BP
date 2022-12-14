import React from 'react';
import MyInput from "../components/UI/input/MyInput";
import {useState} from "react";
import {Button} from "@mui/material";
import CourseWorkService from "../API/CourseWorkService";
import {useNavigate} from "react-router-dom";

const CourseWorkForm = () => {
  const navigate = useNavigate()
  const [work, setWork] = useState({title: '', requirements: '', shortDescription: '', longDescription: '', department: '', professor: ''})

  const addNewPost = (e) => {
    e.preventDefault()
    console.log(work.title, work.shortDescription, work.longDescription, work.requirements)
    CourseWorkService.sendNewCourseWork(work.title, work.shortDescription, work.longDescription, work.requirements, 'Благов', 'Кафедра прикладной кибернетики')
    navigate(-1)
  }

  return (
      <form>
        <h1 style={{textAlign: "left"}}>Название курсовой работы</h1>
        <MyInput
            value={work.title}
            onChange={e => setWork({...work, title: e.target.value})}
            type="text"
        />
        <h2 style={{textAlign: "left"}}>Краткое описание курсовой работы</h2>
        <MyInput
            value={work.shortDescription}
            onChange={e => setWork({...work, shortDescription: e.target.value})}
            type="text"
        />
        <h2 style={{textAlign: "left"}}>Полное описание курсовой работы</h2>
        <textarea
            style={{
              width: "40vw",
              padding: "5px 15px",
              marginTop: "5px",
              border: "1px solid #a6a5a5",
              borderRadius: "3px",
              fontSize: "medium",
              color: "gray",
              height: "100px"
            }}
            value={work.longDescription}
            onChange={e => setWork({...work, longDescription: e.target.value})}
        />
        <h2 style={{textAlign: "left"}}>Требования к курсовой работе</h2>
        <MyInput
            value={work.requirements}
            onChange={e => setWork({...work, requirements: e.target.value})}
            type="text"
        />
        <Button
            onClick={addNewPost}
            sx={{
              fontSize: "18px",
              fontFamily: "Microsoft Sans Serif",
              textTransform: "capitalize",
            }}
        >
          Создать пост
        </Button>
      </form>
  );
};

export default CourseWorkForm;
