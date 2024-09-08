import routes from "./routes/index";
import "./styles/Styles.css";
import Bot from "./components/containers/bot/Bot";

function App() {
  return (
    <>
      {routes}
      <Bot />
    </>
  );
}

export default App;
