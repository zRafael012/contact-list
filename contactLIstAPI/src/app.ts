import "reflect-metadata";
import "express-async-errors";
import express,{Application} from "express";
import handleError from "./errors/errors";
import cors from "cors"
import userRoutes from "./routes/users/users.routes";
import contactRoutes from "./routes/contacts/contacts.routes";
import sessionRoutes from "./routes/sessions/sessions.routes";

const app: Application = express();

app.use(express.json());

app.use(cors())

app.use("/users", userRoutes);
app.use("/login", sessionRoutes);
app.use("/contacts", contactRoutes);

app.use(handleError);

export default app;
