import { Button } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASEURL } from "../../App";
import NoteCard from "./NoteCard";
import './home.css'

function Home() {
  const nvaigate = useNavigate();
  const [getdata, setdata] = useState([]);
  const [userID, setUserId] = useState("");
  useEffect(() => {
    getDataFunc();
  }, []);
// get note here
  const getDataFunc = () => {
    fetch(`${BASEURL}/note`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.new_notes);
        setdata(res.new_notes);
        setUserId(res.userID);
      })
      .catch((err) => console.log(err));
  };
  // delete function
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
        if (res.message == "deletenotes Successfully") {
          getDataFunc();
        }
      })
      .catch((err) => console.log(err));
  };

  const craetenote = () => {
    nvaigate("/createnote");
  };

  return (
    <div>
      <span style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Button
          style={{ marginTop: "10px"}}
          onClick={craetenote}
          variant="contained"
          color="primary"
        >
          {/* <Createnote /> */}
          Create Note
        </Button>
      </span>
      <h1 style={{textAlign:"center"}}>All the notes</h1>{" "}
      <div className="container">
        {getdata.map((elem) => {
          return (
            <NoteCard
              key={elem._id}
              {...elem}
              loginUser={userID}
              deletefunction={deletefunction}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
