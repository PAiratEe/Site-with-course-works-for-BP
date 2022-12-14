import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {Button} from "@mui/material";

const WorkItemCrud = (props) => {
  const router = useNavigate()
  return (
      <div>
        <Button
            sx={{
              display: "flex",
              border: "3px solid lightgray",
              borderRadius: "5px",
              margin: "15px 0px",
              justifyContent: "space-between",
              width: "100%",
              height: "100%",
              textAlign: "left",
              color: "gray",
              textShadow: "0px 0px 3px white",
              backgroundColor: "rgba(97, 98, 112, 0.22)",
              textTransform: "capitalize",
            }}
            className="post"
            onClick={() => router(`/courseworks/${props.coursework.courseWorkId}`)}
        >
          <div>
            <h2 style={{textAlign: "left", color: "black"}}>{props.coursework.title}</h2>
            <pre style={{marginLeft: "10px"}}>{props.coursework.shortDescription}</pre>
          </div>
        </Button>
        <Button onClick={() => router(`/editcoursework/${props.coursework.courseWorkId}`)}>Изменить</Button>
        {/*<Button onClick={() => router(`/createcoursework`)}>Удалить</Button>*/}
      </div>
  );
};

export default WorkItemCrud;