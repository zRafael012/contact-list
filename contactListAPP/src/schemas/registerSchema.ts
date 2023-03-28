import * as yup from "yup";

const registerSchema = yup.object({
    email: yup
        .string()
        .email("Este e-mail não parece válido, tente outro!")
        .required("É obrigatório preencher o campo email"),
    name: yup.string().required("É obrigatório preencher o campo de nome"),
    password:yup.string().min(4,"Sua senha deve ter ao menos 4 digitos").required("É obrigatório preencher o campo de password"),
    confirm: yup.string().oneOf([yup.ref("password")], "As senhas devem ser iguais").required(),
    phone: yup.string().max(9,"O numero telefonico deve ter 9 digitos").min(9,"O numero telefonico deve ter 9 digitos").required("É obrigatório preencher o campo phone"),
    secondEmail: yup
        .string()
        .email("Este e-mail não parece válido, tente outro!")
        .optional(),
    secondPhone: yup.string().optional(),
});

export default registerSchema;