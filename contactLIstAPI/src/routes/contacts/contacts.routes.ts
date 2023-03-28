import { Router } from "express";
import createContactsController from "../../controllers/contacts/createContacts.controller";
import deleteContactsController from "../../controllers/contacts/deleteContact.controller";
import listContactIdController from "../../controllers/contacts/listContactId.controller";
import listContactsController from "../../controllers/contacts/listContacts.controller";
import updateContactsController from "../../controllers/contacts/updateContacts.controller";
import authUserMiddleware from "../../middlewares/authUser.middileware";
import { ensureDataIsValidMiddleware } from "../../middlewares/ensureDataIsValid.middleware";
import verifyContactEmailMiddleware from "../../middlewares/verifyContactEmail.middleware";
import createContactsSchemas from "../../schemas/contacts/createContact.schemas";
import updateContactsSchemas from "../../schemas/contacts/updateContact.schemas";

const contactRoutes = Router();

contactRoutes.post(
  "",
  authUserMiddleware,
  ensureDataIsValidMiddleware(createContactsSchemas),
  verifyContactEmailMiddleware,
  createContactsController
);
contactRoutes.get("", authUserMiddleware, listContactsController);

contactRoutes.get("/:id", authUserMiddleware, listContactIdController);

contactRoutes.patch(
  "/:id",
  authUserMiddleware,
  ensureDataIsValidMiddleware(updateContactsSchemas),
  verifyContactEmailMiddleware,
  updateContactsController
);

contactRoutes.delete("/:id", authUserMiddleware, deleteContactsController);

export default contactRoutes;
