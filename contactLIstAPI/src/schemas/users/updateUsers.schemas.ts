import * as yup from "yup";

const updateUserSchema = yup.object({
  name: yup.string().max(50).min(3).trim().optional(),
  email: yup.string().max(50).email().trim().optional(),
  password: yup.string().min(6).trim().optional(),
  secondEmail: yup.string().max(50).email().trim().optional(),
  secondPhone: yup.string().max(20).nullable().optional(),
  phone: yup.string().max(20).optional(),
});

export default updateUserSchema;
