import * as yup from "yup";


export const createSessionsUserSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default createSessionsUserSchema;