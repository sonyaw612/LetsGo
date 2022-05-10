import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {
  Nav,
  // Navbar,
  // NavDropdown,
  // Container,
} from 'react-bootstrap';
// import { Navigation } from 'react-mdl';

// ---------------------------------
// import SignInPage from './pages/SignInPage';
import TechAdmin from './pages/TechAdmin';
import Accounting from './pages/Accounting';
import EventCoord from './pages/EventCoord';
import Logistics from './pages/Logistics';
import Marketing from './pages/Marketing';
import CompanyEvents from './pages/CompanyEvents';
// import Management from './pages/Management';
// ---------------------------------

function Home(){
  return(
    <div style={{ textAlign: 'center'}}><h1>Welcome to Let's Go Event Management Application!</h1></div>
  );
}

class App extends React.Component {

  render() {
    return (
      <div className="container">

        <div>
          <Nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3" variant='pills'>
            {/* <Link className="navbar-brand" to="/marketing">Marketing</Link> */}

            <Nav.Item><Nav.Link href = '/'            eventKey = 'home'      >Home</                Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href = '/events'      eventKey = 'events'    >Events</                Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href = '/accounting'  eventKey = 'accounting'>Accounting</          Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href = '/techadmin'   eventKey = 'techadmin' >Tech Administration</ Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href = '/eventcoord'  eventKey = 'eventcoord'>Event Management</    Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href = '/logistics'   eventKey = 'logistics' >Logistics</           Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href = '/marketing'   eventKey = 'marketing' >Marketing</           Nav.Link></Nav.Item>

          </Nav>
        </div>

        <div>
          <Router>
            <Routes>
                <Route path = "/"           element = {<Home/>}/>
                <Route path = "/events"     element = {<CompanyEvents/>}/>
                <Route path = "/accounting" element = {<Accounting/>}/>
                <Route path = "/techadmin"  element = {<TechAdmin/>}/>
                <Route path = "/eventcoord" element = {<EventCoord/>}/>
                <Route path = "/logistics"  element = {<Logistics/>}/>
                <Route path = "/marketing"  element = {<Marketing/>}/>
            </Routes>
          </Router>
        </div>

      </div>
    );
  }
}

export default App;


