import { iUserLogin } from "../components/FormLogin/interface";
import { api } from "../services/Api";
import { createContext, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  iAuthContextProvider,
  iAuthProviderData,
  iContactResponse,
  iLogin,
  iUserCreate,
} from "./interface";
import { iUserProps } from "./interface";
import { iUserRegister } from "../components/FormRegister/interface";
import { iContactCreate } from "../components/ModalAddContacts/interface";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext<iAuthProviderData>({} as iAuthProviderData);

export const AuthContextProvider = ({ children }: iAuthContextProvider) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<iUserProps>();
  const [contacts, setContacts] = useState<iContactResponse[] | []>([]);
  const [login, setLogin] = useState("");
  const [loading, setLoading] = useState(false);
  const [contactEdit, setContactEdit] = useState<iContactResponse>();
  const [useEye, setUseEye] = useState("password");
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  const MySwal = withReactContent(Swal);

  const ToastSuccess = MySwal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    background: "#168821",
    color: "#FFFFFF",
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", MySwal.stopTimer);
      toast.addEventListener("mouseleave", MySwal.resumeTimer);
    },
  });

  const ToastError = MySwal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    background: "#B53147",
    color: "#FFFFFF",
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", MySwal.stopTimer);
      toast.addEventListener("mouseleave", MySwal.resumeTimer);
    },
  });

  const requestProfile = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`;

        const { data } = await api.get<iUserProps>("/users");
        setLoading(false);
        setUser({ ...data });
        setContacts([...data.contacts]);
      } catch (error) {
        console.error(error);
      }
      navigate("/dashboard");
    } else{
      navigate("/")
    }
  };

  const onSubmitFunctionLogin = async (userData: iUserLogin) => {
    setLoading(true);

    try {
      const response = await api.post<iLogin>("/login", userData);
      localStorage.setItem("token", response.data.token);
      setLogin("1");
    } catch (error) {
      setLoading(false);
      ToastError.fire({
        icon: "error",
        iconColor: "#EC8697",
        title: `E-mail ou senha inválida!`,
      });
    }
  };

  const onSubmitFunctionRegister = async (userData: iUserRegister) => {
    try {
      await api.post<iUserCreate>("/users", userData);
      ToastSuccess.fire({
        icon: "success",
        title: `Conta criada com sucesso!`,
      });
      navigate("/");
    } catch (error) {
      console.error(error);
      ToastError.fire({
        icon: "error",
        iconColor: "#EC8697",
        title: `E-mail está em uso ou é um e-mail inválido!`,
      });
    }
  };

  const onSubmitFunctionContact = async (userData: iContactCreate) => {
    try {
      const response = await api.post<iContactResponse>("/contacts", userData);
      ToastSuccess.fire({
        icon: "success",
        title: `Contato adicionado com sucesso!`,
      });
      setContacts([...contacts, response.data]);
      setModal1(false);
    } catch (error) {
      console.error(error);
      ToastError.fire({
        icon: "error",
        iconColor: "#EC8697",
        title: `Email está em uso, Por favor coloque outro email!`,
      });
    }
  };

  const onSubmitFunctionContactEdit = async (userData: iContactCreate) => {
    for (const prop in userData) {
      if (!userData[prop]) {
        delete userData[prop];
      }
    }
    try {
      await api.patch<iContactResponse>(
        `/contacts/${contactEdit?.id}`,
        userData
      );
      ToastSuccess.fire({
        icon: "success",
        title: `Contato editado com sucesso!`,
      });
      window.location.reload();
      setModal2(false);
    } catch (error) {
      console.error(error);
      ToastError.fire({
        icon: "error",
        iconColor: "#EC8697",
        title: `E-mail está em uso ou é um e-mail inválido!`,
      });
    }
  };

  const onSubmitFunctionContactGet = async (id: string) => {
    try {
      const response = await api.get<iContactResponse>(`/contacts/${id}`);
      setContactEdit({ ...response.data });
    } catch (error) {
      console.error(error);
      ToastError.fire({
        icon: "error",
        iconColor: "#EC8697",
        title: `Erro na solicitação!`,
      });
    }
  };

  const onSubmitFunctionContactDelete = async () => {
    try {
      await api.delete<iContactResponse>(`/contacts/${contactEdit?.id}`);
      ToastSuccess.fire({
        icon: "success",
        title: `Contato deletado com sucesso!`,
      });
      const filterContacts = contacts.filter(
        (contact) => contact.id !== contactEdit?.id
      );
      setContacts([...filterContacts]);
      setModal3(false);
    } catch (error) {
      console.error(error);
      ToastError.fire({
        icon: "error",
        iconColor: "#EC8697",
        title: `Erro na solicitação!`,
      });
    }
  };
  useEffect(() => {
    requestProfile();
  }, [login]);

  return (
    <AuthContext.Provider
      value={{
        onSubmitFunctionLogin,
        onSubmitFunctionRegister,
        onSubmitFunctionContact,
        onSubmitFunctionContactEdit,
        onSubmitFunctionContactGet,
        onSubmitFunctionContactDelete,
        useEye,
        setUseEye,
        user,
        setLogin,
        setModal1,
        setModal2,
        modal2,
        modal1,
        modal3,
        setModal3,
        contacts,
        setContacts,
        contactEdit,
        setContactEdit,
        loading,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useProvider = () => useContext(AuthContext);
