import * as yup from "yup"

const loginSchema = yup.object({
    email: yup
        .string()
        .email("Este e-mail não parece válido, tente outro!")
        .required("É obrigatório preencher o campo email"),
    password:yup.string().required("É obrigatório preencher o campo de password"),
})

export default loginSchema