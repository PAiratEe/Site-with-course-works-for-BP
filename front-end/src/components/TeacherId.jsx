import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useFetching} from "./hooks/useFetching";
import CourseWorkService from "../API/CourseWorkService";
import {Button} from "@mui/material";
import WorkItem from "./WorkItem";
import ProfessorService from "../API/ProfessorService";

const TeacherId = () => {
  const params = useParams()
  const [works, setWorks] = useState([])
  const [professorInfo, setProfessorInfo] = useState([])
  const [fetchWorks, isWorksLoading] = useFetching(async () => {
    const response = await CourseWorkService.getAllCourseWorksByProfessorId(
        params.id)
    console.log(response)
    if (response != "У вас еще нет работ!") {
      setWorks(response)
    }
  })
  const [fetchProfessor, isProfessorLoading] = useFetching(async () => {
    const response = await ProfessorService.getProfessorInfoById(params.id)
    console.log(response)
    setProfessorInfo(response)
  })

  useEffect(() => {
    fetchWorks()
    fetchProfessor()
  }, [])

  return (
      <div>
        {isWorksLoading && isProfessorLoading
            ?
            <h1>Загружаю...</h1>
            :
            <div>
              <table>
                <tbody>
                <tr>
                  <td className="nav">
                    <div className="nav_div">
                      <ul style={{marginTop: "20px"}}>
                        <li><a href="#about">
                          <Button
                              id="basic-button"
                              sx={{
                                color: "#44597e",
                                fontSize: "18px",
                                fontFamily: "Microsoft Sans Serif",
                                textTransform: "capitalize",
                              }}
                          >
                            Личная информация
                          </Button>
                        </a></li>
                        <li><a href="#courseworks">
                          <Button
                              id="basic-button"
                              sx={{
                                color: "#44597e",
                                fontSize: "18px",
                                fontFamily: "Microsoft Sans Serif",
                                textTransform: "capitalize",
                              }}
                          >
                            Курсовые работы
                          </Button>
                        </a></li>
                      </ul>
                    </div>
                  </td>
                  <td className="body">
                    <div>
                      <h2 id="about">Личная информация</h2>
                      <div style={{marginLeft: "10px"}}>
                        {professorInfo.prpfessorSecondName + " "
                            + professorInfo.professorName + " "
                            + professorInfo.professorPatronymic} <br/>
                        Звание: {professorInfo.professorPost}<br/>
                        Почта: {professorInfo.professorEmail}<br/>
                      </div>
                      <h2 id="courseworks"></h2>
                      <div style={{
                        marginLeft: "10px",
                        width: "40%"
                      }}>
                        {works.map((coursework, index) =>
                            <WorkItem number={index + 1} coursework={coursework}
                                      key={coursework.courseWorkId}/>)
                        }
                      </div>
                      <br/><br/>
                    </div>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
        }
      </div>
  );
};

export default TeacherId;