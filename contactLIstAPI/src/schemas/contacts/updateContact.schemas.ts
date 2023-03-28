import * as yup from "yup";

const updateContactsSchema = yup.object({
  name: yup.string().max(50).min(3).trim().optional(),
  email: yup.string().max(50).email().trim().optional(),
  secondEmail: yup.string().max(50).email().trim().nullable().optional(),
  secondPhone: yup.string().max(20).optional().nullable(),
  phone: yup.string().max(20).optional(),
});

export default updateContactsSchema;
