import * as yup from "yup";

const contactSchema = yup.object({
    email: yup
        .string()
        .email("Este e-mail não parece válido, tente outro!")
        .required("É obrigatório preencher o campo email"),
    name: yup.string().required("É obrigatório preencher o campo de nome"),
    phone: yup.string().max(9,"O numero telefonico deve ter 9 digitos").min(9,"O numero telefonico deve ter 9 digitos").required("É obrigatório preencher o campo phone"),
    secondEmail: yup
        .string()
        .email("Este e-mail não parece válido, tente outro!")
        .nullable(),
    secondPhone: yup.string().nullable(),
});

export default contactSchema;