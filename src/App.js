import { Switch, Route } from 'react-router-dom';
import Charsheet from './components/Charsheet';

function App() {
  return (
    <Switch>
      <Route exact component={ Charsheet } path="/" />
    </Switch>
  );
}

export default App;
