const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get('/add/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Invalid input. Please enter valid numbers.');
    }

    const sum = num1 + num2;
    res.json({ result: sum });
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;