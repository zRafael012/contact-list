import * as yup from "yup";

const contactUpdateSchema = yup.object({
    email: yup
        .string()
        .email("Este e-mail não parece válido, tente outro!")
        .nullable(),
    name: yup.string().nullable(),
    phone: yup.string().optional().max(9,"O numero telefonico deve ter 9 digitos").nullable(),
    secondEmail: yup
        .string()
        .email("Este e-mail não parece válido, tente outro!")
        .nullable(),
    secondPhone: yup.string().nullable(),
});

export default contactUpdateSchema;