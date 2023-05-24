import {
  Container,
  TextField,
  Button,
  Stack,
  Box,
  Typography,
  useThemeProps,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { db } from "../Firebase";
import {
  collection,
  addDoc,
  Timestamp,
  query,
  orderBy,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

export default function Task() {
  const [taskArr, setTaskArr] = useState([]);
  const [task, setTask] = useState("");
  const [edit, setEdit] = useState(false);
  const [editName, setEditName] = useState();

  /* function to add new task to firestore */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "tasks"), {
        task: task,
        isEdit: false,
        created: Timestamp.now(),
      });
      // onClose();
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    const q = query(collection(db, "tasks"), orderBy("created", "desc"));
    onSnapshot(q, (querySnapshot) => {
      setTaskArr(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  /* function to delete a document from firstore */
  const handleDelete = async (id) => {
    const taskDocRef = doc(db, "tasks", id);
    try {
      await deleteDoc(taskDocRef);
    } catch (err) {
      alert(err);
    }
  };

  /* function to update document in firestore */
  // const handleUpdate = async (e) => {
  //   e.preventDefault();
  //   const taskDocRef = doc(db, "tasks", id);
  //   try {
  //     await updateDoc(taskDocRef, {
  //       title: title,
  //       description: description,
  //     });
  //     onClose();
  //   } catch (err) {
  //     alert(err);
  //   }
  // };

  // function handleSubmit() {
  //   const taskObj = {
  //     task: task,
  //     isEdit: false,
  //   };
  //   const temp = [...taskArr, taskObj];
  //   setTaskArr(temp);
  //   setTask(" ");
  // }

  // function handleDelete(index) {
  //   const temp = [...taskArr];
  //   const filtered = temp.filter((ele, ind) => index != ind);
  //   setTaskArr(filtered);
  // }
  function handleEdit(index) {
    const temp = { ...taskArr[index] };
    temp.isEdit = true;
    const updated = [...taskArr];
    updated.splice(index, 1, temp);
    setTaskArr(updated);
  }
  function handleEditSave(index) {
    const temp = { ...taskArr[index] };
    temp.task = editName;
    temp.isEdit = false;
    const updated = [...taskArr];
    updated.splice(index, 1, temp);
    setTaskArr(updated);
  }

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: 2,
      }}
    >
      <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <TextField
          sx={{
            borderRadius: 1,
            color: "white",
            backgroundColor: "white",
            width: "30vw",
          }}
          placeholder="Enter task"
          onChange={(e) => setTask(e.target.value)}
        />

        <Button sx={{ mt: 4 }} variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
      <Stack>
        {taskArr.map((ele, index) => (
          <span
            key={ele.id}
            style={{ display: "flex", alignItems: "center", gap: "1rem" }}
          >
            {ele.data.isEdit ? (
              <span>
                <input onChange={(e) => setEditName(e.target.value)} />
                <Button onClick={() => handleEditSave(index)}>Save</Button>
              </span>
            ) : (
              <Typography width={"20rem"} variant="body1" color={"white"}>
                {ele.data.task}{" "}
              </Typography>
            )}
            <Button onClick={() => handleDelete(ele.id)}>X</Button>
            <Button onClick={() => handleEdit(index)}>Edit</Button>
          </span>
        ))}
      </Stack>
    </Container>
  );
}
