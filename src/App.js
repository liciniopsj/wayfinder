import { Switch, Route } from "react-router-dom";
import PlaceHolder from "./pages/PlaceHolder";

function App() {
  return (
    <Switch>
      <Route exact component={PlaceHolder} path="/" />
    </Switch>
  );
}

export default App;
