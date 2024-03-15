import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={Users} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
