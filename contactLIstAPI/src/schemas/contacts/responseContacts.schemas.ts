import * as yup from "yup";

const responseContactsSchema = yup.object({
  id: yup.string(),
  name: yup.string(),
  email: yup.string(),
  secondEmail: yup.string().nullable(),
  phone: yup.string(),
  secondPhone: yup.string().nullable(),
  createdAt: yup.date(),
  updatedAt: yup.date(),
});

export default responseContactsSchema;
