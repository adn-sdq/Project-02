import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
