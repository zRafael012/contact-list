import Header from "../../components/Header";
import ListContacts from "../../components/ListContacts";
import ModalAddContacts from "../../components/ModalAddContacts";
import ModalDelete from "../../components/ModalDelete";
import ModalEditContact from "../../components/ModalEditContact";
import { useProvider } from "../../contexts/authContext";
import { ContatoS, MainS } from "../../styles/MainDash";

export default function Dashbord() {
  const { setModal1 } = useProvider();
  return (
    <>
      <Header />
      <MainS>
        <div>
          <button
            type="button"
            onClick={(e) => {
              setModal1(true);
            }}
          >
            Adicionar
          </button>
        </div>
        <ContatoS>
          <h2>Contatos</h2>
        </ContatoS>
        <ListContacts />
        <ModalAddContacts />
        <ModalEditContact />
        <ModalDelete />
      </MainS>
    </>
  );
}
