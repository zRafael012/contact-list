import { useProvider } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";
import { HeaderS } from "./style";

export default function Header() {
  const { user, setLogin } = useProvider();
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear()
    navigate("/")
    setLogin("2");
  };

  return (
    <HeaderS>
  <>
        <div className="container">
          <h1>Contact List</h1>  
        <button type="button" onClick={handleLogout}>
          Sair
        </button>
          </div>
        <div className="clientInfo">     
          <h4>
            <strong>Cliente:</strong> {user?.name}
          </h4>
          <p>
            <strong>E-mail: </strong> {user?.email}
          </p>
          <p>
            <strong>Número de telefone:</strong> {user?.phone}
          </p>
          {!!user?.secondEmail && (
            <p>
              <strong>E-mail secundário: </strong> {user?.secondEmail}
            </p>
          )}
          {!!user?.secondPhone && (
            <p>
              <strong>Telefone secundário: </strong>
              {user?.secondPhone}
            </p>
          )}
        </div>
          </>
    </HeaderS>
  );
}
