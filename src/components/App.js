import {Route, Switch} from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import TaskPage from "../pages/TaskPage";


function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/tasks">
                <Profile/>
            </Route>
            <Route exact path="/task/:id">
                <TaskPage/>
            </Route>
            <Route path="*">
                <Home/>
            </Route>
        </Switch>
    </div>
  );
}

export default App;
