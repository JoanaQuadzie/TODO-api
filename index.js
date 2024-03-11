import express from "express";
import bodyParser from "body-parser";
import todosRoutes from "./routes/todos.routes.js";

// Create express app
const app = express();

//Apply middlewares
app.use(bodyParser.json());

// Use routes
app.use(todosRoutes);

//Listen for incoming requests
app.listen(4000, () => {
    console.log("Express app is running!")
});















// the listen part must always be the last code