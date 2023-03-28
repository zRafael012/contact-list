import * as yup from "yup";

const createContactsSchema = yup.object({
  name: yup.string().max(50).min(3).trim(),
  email: yup.string().max(50).email().trim(),
  secondEmail: yup.string().max(50).email().trim().nullable().optional(),
  secondPhone: yup.string().max(20).nullable().optional(),
  phone: yup.string().max(20),
});

export default createContactsSchema;
