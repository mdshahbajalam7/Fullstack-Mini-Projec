// import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BASEURL } from "../../App";
import NoteCard from "./NoteCard";

function Home() {
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

  // useEffect(()=>{
  //   axios.get(`${BaseUrl}/get/${"id"}`)
  //   .then(({data})=>{
  //     console.log(data);
  //   })
  //   .catch((err)=>console.log(err))
  // },[])
  return (
    <div>
      <h1>All the notes</h1>
      <div>
        {getdata.map((elem) => {
          return <NoteCard key={elem._id} {...elem} />;
        })}
      </div>
    </div>
  );
}

export default Home;
