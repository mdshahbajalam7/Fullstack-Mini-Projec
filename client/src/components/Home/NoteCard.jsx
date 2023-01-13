import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BASEURL } from "../../App";

function NoteCard({ title, note, category, userID, _id }) {
 const navigate = useNavigate()
  const editfunction = (id)=>{
    navigate(`/edit/${id}`)
  }
  const deletefunction = (nodeId) => {
    console.log(nodeId);
    fetch(`${BASEURL}/deletedata/${nodeId}`, {
      method: "DELETE",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <p>userID : {userID}</p>
      <h1>Title : {title}</h1>
      <h5>Note : {note}</h5>
      <p>category : {category}</p>
      <Button
        variant="contained"
        color="error"
        onClick={() => deletefunction(_id)}
      >
        Delete
      </Button>
      <Button   onClick={() => editfunction(_id)}  variant="contained" color="primary">Edit</Button>
      <hr />
    </div>
  );
}

export default NoteCard;

// {
//     "_id": "63bfd3e8bfa5ceaabf5935a3",
//     "title": "Backend",
//     "note": "Today it is the fullStack CRUD Operation",
//     "category": "Live Session",
//     "author": "pulkit",
//     "__v": 0
//   },
//   {
//     "_id": "63c0592f5940045d2dec04ec",
//     "title": "Alam num create",
//     "note": "Backend",
//     "category": "live class",
//     "userID": "63c0396ca14e5f17c200eb8a",
//     "__v": 0
//   }
