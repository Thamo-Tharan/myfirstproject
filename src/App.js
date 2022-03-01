import logo from './logo.svg';
import './App.css';
import Mealcat from './components/mealcategories'
import Loginpage from './components/Loginpage'
import Cartpage from './components/Cart'
import Headercom from './components/header';
import Headingcom from './components/headingtext'
import Searchcom from './components/searchcom'
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
            <BrowserRouter>
          <Switch>
            <Route exact path={"/"} component={Loginpage} />
            <Route exact path={"/home"} component={Headercom ,Headingcom,Searchcom,Mealcat}/>
            <Route exact path={"/cart"} component={Cartpage} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}
export default App;
