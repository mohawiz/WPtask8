const express = require("express");
const app = express();

const PORT = 3000;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

app.get('/getRequest', (req, res) => {
    res.send("Hello! following is a successful GET request.My name is Mohawiz Hamid.");
});

app.post("/postRequest", (req, res) => {
    res.send("Hello! Following is a successful POST request.");
});

app.put("/putRequest", (req, res) => {
    res.send("Hello! Following is a successful PUT request");
});
