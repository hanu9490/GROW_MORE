import routes from "./routes/index";
import "./styles/Styles.css";
import Bot from "./components/containers/bot/Bot";
import { useSelector } from "react-redux";
function App() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  console.log("isLoggedIn", isLoggedIn);
  return (
    <>
      {routes}
      <Bot />
    </>
  );
}

export default App;
