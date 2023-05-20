import React, {useEffect} from 'react';
import MyInput from "../components/UI/input/MyInput";
import {useState} from "react";
import {Button} from "@mui/material";
import CourseWorkService from "../API/CourseWorkService";
import {useNavigate, useParams} from "react-router-dom";
import {useFetching} from "../components/hooks/useFetching";

const CourseWorkEditor = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [work, setWork] = useState({})
  const [title, setTitle] = useState("")
  const [shortDescription, setShortDescription] = useState("")
  const [longDescription, setLongDescription] = useState("")
  const [requirements, setRequirements] = useState("")
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [patronymic, setPatronymic] = useState("")
  const [email, setEmail] = useState("")
  const [state, setState] = useState("")


  const [fetchWorkById, isLoading] = useFetching(async () => {
    const response = await CourseWorkService.getById(params.id)
    setTitle(response.title)
    setShortDescription(response.shortDescription)
    setLongDescription(response.longDescription)
    setRequirements(response.requirements)
    setName(response.professor.professorName)
    setSurname(response.professor.professorSurname)
    setPatronymic(response.professor.professorPatronymic)
    setState(response.professor.professorPost)
    setEmail(response.professor.professorEmail)
  })

  useEffect(() => {
    fetchWorkById(params.id)
  }, [])

  const addNewPost = (e) => {
    e.preventDefault()
    console.log(title, shortDescription, longDescription, requirements)
    CourseWorkService.sendNewCourseWork(title, shortDescription, longDescription, requirements, 'Благов', 'Михаил', 'Валерьевич', 'Прикладная кибернетика', 1)
    navigate(-1)
  }

  return (
      <form>
        <h1 style={{textAlign: "left"}}>Название курсовой работы</h1>
        <MyInput
            value={title}
            onChange={e => setTitle(e.target.value)}
            type="text"
        />
        <h2 style={{textAlign: "left"}}>Краткое описание курсовой работы</h2>
        <MyInput
            value={shortDescription}
            onChange={e => setShortDescription(e.target.value)}
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
            value={longDescription}
            onChange={e => setLongDescription(e.target.value)}
        />
        <h2 style={{textAlign: "left"}}>Требования к курсовой работе</h2>
        <MyInput
            value={requirements}
            onChange={e => setRequirements(e.target.value)}
            type="text"
        />
        <Button
            onClick={addNewPost}
            sx={{
              color: "gray",
              fontSize: "18px",
              fontFamily: "Microsoft Sans Serif",
              textTransform: "capitalize",
            }}
        >
          Сохранить пост
        </Button>
      </form>
  );
};

export default CourseWorkEditor;
