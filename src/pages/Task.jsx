import {
  Container,
  TextField,
  Button,
  Stack,
  Box,
  Typography,
  useThemeProps,
} from "@mui/material";
import React, { useState } from "react";

export default function Task() {
  const [taskArr, setTaskArr] = useState([]);
  const [task, setTask] = useState("");
  const [edit, setEdit] = useState(false);
  const [editName, setEditName] = useState();

  function handleSubmit() {
    const taskObj = {
      task: task,
      isEdit: false,
    };
    const temp = [...taskArr, taskObj];
    setTaskArr(temp);
    setTask(" ");
  }
  function handleDelete(index) {
    const temp = [...taskArr];
    const filtered = temp.filter((ele, ind) => index != ind);
    setTaskArr(filtered);
  }
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
          <span style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {ele.isEdit ? (
              <span>
                <input onChange={(e) => setEditName(e.target.value)} />
                <Button onClick={() => handleEditSave(index)}>Save</Button>
              </span>
            ) : (
              <Typography width={"20rem"} variant="body1" color={"white"}>
                {ele.task}{" "}
              </Typography>
            )}
            <Button onClick={() => handleDelete(index)}>X</Button>
            <Button onClick={() => handleEdit(index)}>Edit</Button>
          </span>
        ))}
      </Stack>
    </Container>
  );
}
