import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navigation } from 'react-mdl';

// ---------------------------------
import SignInPage from './pages/SignInPage';
import Accounting from './pages/Accounting';
import EventCoord from './pages/EventCoord';
import Logistics from './pages/Logistics';
import Management from './pages/Management';
import Marketing from './pages/Marketing';
import TechAdmin from './pages/TechAdmin';
// ---------------------------------

// function Navigation(props) {
//   return (
//     <div>
//       {/* <nav className="navbar navbar-dark bg-dark shadow mb-3"> */}
//       <li>
//         <Link to = "/signin">Sign-in page</Link>
//       </li> 
//       <li>
//         <Link to = "/techadmin">TechAdmin</Link>
//       </li> 
//       {/* </nav> */}
//     </div>
//   );
// }


class App extends React.Component {
  render() {
    return (
      <div class="container">
        {/* <Router>
          <Navigation />
          <Switch>
            <Route path = '/accounting' component = { Accounting } />
            <Route path = '/eventCoord' component = { EventCoord } />
            <Route path = '/logistics'  component = { Logistics } />
            <Route path = '/management' component = { Management } />
            <Route path = '/marketing'  component = { Marketing } /> 
            <Route path = '/techadmin'  component = { TechAdmin } />
            <Route path = '/signin'     component = { SignInPage } />
          </Switch>
        </Router> */}

        {/* <Accounting /> */}
        {/* <EventCoord /> */}
        {/* <Logistics /> */}
        {/* <Management /> */}
        {/* <Marketing /> */}
        {/* <TechAdmin /> */}
        {/* <SignInPage /> */}
      </div>
    );
  }
}

export default App;


{/* <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/signin">
            Sign In
          </NavLink>        
          <Link className="navbar-brand" to="/">Home</Link>
        </li>
         <li className="nav-item">
          <NavLink className="nav-link" exact to="/accounting">
            Accounting
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/event-coord">
            Event Coordination
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/logistics">
            Logistics
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/management">
            Management
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/marketing">
            Marketing
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/tech-admin">
            Technology Administration
          </NavLink>
        </li>
      </ul> */}

      {/* <Router>          
        <Switch>
          <Route path="/accounting" component={Accounting} />
          <Route path="/event-coord" component={EventCoord} />
          <Route path="/logistics" component={Logistics} />
          <Route path="/management" component={Management} />
          <PrivateRoute path="/marketing" component={Marketing} />
          <PrivateRoute path="/tech-admin" component={TechAdmin} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router> */}