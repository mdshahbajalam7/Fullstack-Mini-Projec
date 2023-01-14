import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASEURL } from "../../App";
import styles from "../page/data.module.css";
function Editpage() {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const [title, settitle] = useState("");
  const [note, setnote] = useState("");
  const [category, setcategory] = useState("");
  // const [notecreate, setnotecreate] = useState({});
  // const handlechange = (e) => {
  //   setnotecreate({ ...notecreate, [e.target.name]: e.target.value });
  // };
  const handlesubmit = (e) => {
    e.preventDefault();
    const notecreate = {
      title,
      note,
      category,
    };
    console.log(notecreate);
    fetch(`${BASEURL}/update/${id}`, {
      method: "PATCH",
      body: JSON.stringify(notecreate),
      headers: {
        "Content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch(`${BASEURL}/get/${id}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        settitle(res.getidauth.title);
        setnote(res.getidauth.note);
        setcategory(res.getidauth.category);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className={styles.container}>
      <Box className={styles.inputfield}>
        <form className={styles.form} onSubmit={handlesubmit}>
          <TextField
            style={{ marginTop: "15px" }}
            onChange={(e) => settitle(e.target.value)}
            value={title}
            id="outlined-basic"
            label="Title"
            // name="title"
            variant="outlined"
          />
          <TextField
            style={{ marginTop: "15px" }}
            onChange={(e) => setnote(e.target.value)}
            value={note}
            id="outlined-basic"
            label="Note"
            // name="note"
            variant="outlined"
          />
          <TextField
            style={{ marginTop: "15px" }}
            onChange={(e) => setcategory(e.target.value)}
            value={category}
            id="outlined-basic"
            label="Category"
            // name="category"
            variant="outlined"
          />
          <input
            style={{ marginTop: "15px" }}
            className={styles.btn}
            type="submit"
            value=" Update Note Create"
          />
          <Button
            style={{ marginTop: "15px" }}
            variant="contained"
            color="secondary"
            className={styles.btn}
            onClick={() => navigate("/")}
          >
            GO BACK HOME{" "}
          </Button>
        </form>
      </Box>
    </div>
  );
}

export default Editpage;
