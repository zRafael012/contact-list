import { Router } from "express";
import createUserController from "../../controllers/users/createUser.controller";
import deleteUserController from "../../controllers/users/deleteUser.controller";
import listUserProfileController from "../../controllers/users/listUserProfile.controller";
import updateUserController from "../../controllers/users/updateUser.controller";
import authUserMiddleware from "../../middlewares/authUser.middileware";
import { ensureDataIsValidMiddleware } from "../../middlewares/ensureDataIsValid.middleware";
import verifyUserEmailMiddleware from "../../middlewares/verifyUserEmail.middleware";
import createUserSchema from "../../schemas/users/createUsers.schemas";
import updateUserSchema from "../../schemas/users/updateUsers.schemas";

const userRoutes: Router = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(createUserSchema),
  verifyUserEmailMiddleware,
  createUserController
);

userRoutes.get("", authUserMiddleware, listUserProfileController);

userRoutes.delete("/:id", authUserMiddleware, deleteUserController);

userRoutes.patch(
  "/:id",
  authUserMiddleware,
  ensureDataIsValidMiddleware(updateUserSchema),
  verifyUserEmailMiddleware,
  updateUserController
);

export default userRoutes;
