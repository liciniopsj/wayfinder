import { Switch, Route } from "react-router-dom";
import PlaceHolder from "./pages/PlaceHolder";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route exact component={PlaceHolder} path="/" />
    </Switch>
  );
}

export default App;
