import express from "express";
const port = 6500;
const app = express();

app.get("/student", (req, res) => {
    res.end("Welcome to the student detail api")
})

app.post("/student", (req, res) => {
    res.end(`we are adding new student to the api`)
})

app.put("/student:id", (req, res) => {
    const id = req.params.id;
    res.end(`we are updating the detail of the student of ${id}`)
})

app.patch("/student:id", (req, res) => {
    const id = req.params.id;
    res.end(`we are updating only a single field ${id}`)
})

app.delete("/student:id", (req, res) => {
    const id = req.params.id;
    res.end(`we are deleting the detail of the student of ${id}`)
})

app.listen(port, () => {
    console.log(`server is running at port ${port}`);
})