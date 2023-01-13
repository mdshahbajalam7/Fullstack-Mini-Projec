import { Button } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASEURL } from "../../App";
import NoteCard from "./NoteCard";

function Home() {
  const nvaigate = useNavigate();
  const [getdata, setdata] = useState([]);
  useEffect(() => {
    fetch(`${BASEURL}/note`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.new_notes);
        setdata(res.new_notes);
      })
      .catch((err) => console.log(err));
  }, []);
  const craetenote = () => {
    nvaigate("/createnote");
  };
  // useEffect(()=>{
  //   axios.get(`${BaseUrl}/get/${"id"}`)
  //   .then(({data})=>{
  //     console.log(data);
  //   })
  //   .catch((err)=>console.log(err))
  // },[])
  return (
    <div>
      <h1>All the notes</h1>{" "}
      <span>
        <Button onClick={craetenote} variant="contained" color="primary">
          {/* <Createnote /> */}
          Create Note
        </Button>
      </span>
      <div>
        {getdata.map((elem) => {
          return <NoteCard key={elem._id} {...elem} />;
        })}
      </div>
    </div>
  );
}

export default Home;
