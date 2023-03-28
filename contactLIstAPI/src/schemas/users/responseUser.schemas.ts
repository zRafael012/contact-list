import * as yup from "yup";
import responseContactsSchemas from "../contacts/responseContacts.schemas";

const responseCreateUserSchema = yup.object({
  id: yup.string(),
  name: yup.string(),
  email: yup.string(),
  secondEmail: yup.string().nullable(),
  phone: yup.string(),
  secondPhone: yup.string().nullable(),
  isAdm: yup.boolean(),
  createdAt: yup.date(),
  updatedAt: yup.date(),
  contacts: yup.array(responseContactsSchemas).optional(),
});

export default responseCreateUserSchema;
