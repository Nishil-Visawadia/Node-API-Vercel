const express = require("express");
import * as expressModule from "express";
const app = express();
// const swaggerUi = require("swagger-ui-express");
// const swaggerDocument = require("../swagger.json");

app.get("/", (req: expressModule.Request, res: expressModule.Response) => res.send("Express on Vercel"));

app.get('/add/:num1/:num2', (req: expressModule.Request, res: expressModule.Response) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Invalid input. Please enter valid numbers.');
    }

    const sum = num1 + num2;
    res.json({ result: sum });
});

// // Swagger UI route
// app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
