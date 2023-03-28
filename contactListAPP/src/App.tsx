import './App.css';
import { AuthContextProvider } from "./contexts/authContext";
import { AllRoutes } from './routes/routes';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
  <>
  <AuthContextProvider>
  <AllRoutes />
  </AuthContextProvider>
  <GlobalStyles />
  </>
  );
}

export default App;
