import { Router } from "express";
import createSessionUserController from "../../controllers/sessions/createSessionsUser.controller";
import { ensureDataIsValidMiddleware } from "../../middlewares/ensureDataIsValid.middleware";
import createSessionsUserSchemas from "../../schemas/sessions/sessionsUser.schemas";

const sessionRoutes = Router();

sessionRoutes.post(
  "",
  ensureDataIsValidMiddleware(createSessionsUserSchemas),
  createSessionUserController
);

export default sessionRoutes;
