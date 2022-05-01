import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link,
  Outlet,
} from 'react-router-dom'; 
import {
  Navbar,
  NavDropdown,
  Nav,
  Container,
} from 'react-bootstrap';
// import { Navigation } from 'react-mdl';

// ---------------------------------
import SignInPage from './pages/SignInPage';
import TechAdmin from './pages/TechAdmin';
import Accounting from './pages/Accounting';
import EventCoord from './pages/EventCoord';
import Logistics from './pages/Logistics';
import Management from './pages/Management';
import Marketing from './pages/Marketing';
// ---------------------------------

function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <Link className="navbar-brand" to="/">Home</Link>
      <Link className="navbar-brand" to="/signin">Sign in</Link>
      <Link className="navbar-brand" to="/techadmin">Tech Administrators</Link>
      <Link className="navbar-brand" to="/accounting">Accountants</Link>
      <Link className="navbar-brand" to="/eventcoord">Event Coordinators</Link>
      <Link className="navbar-brand" to="/logistics">Logistics</Link>
      <Link className="navbar-brand" to="/management">Management</Link>
      <Link className="navbar-brand" to="/marketing">Marketing</Link>
    </nav>
  );
}


class App extends React.Component {
  render() {
    return (
      <div class="container">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="/">Let's Go Event Manager</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/signin">Sign-In</Nav.Link>
              <Nav.Link href="/logout">Logout</Nav.Link>
              <Nav.Link href="/aboutus">About Us</Nav.Link>
              <Nav.Link href="/home">Home</Nav.Link>
              <NavDropdown title="Departments" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/eventcoord">Event Coordinators</NavDropdown.Item>
                <NavDropdown.Item href="/accounting">Accounting</NavDropdown.Item>
                <NavDropdown.Item href="/marketing">Marketing</NavDropdown.Item>
                <NavDropdown.Item href="/logistics">Logistics</NavDropdown.Item>
                <NavDropdown.Item href="/management">Management</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/techadmin">Tech Administration</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <Navigation />
      <div>
        <Routes>
          <Route path = '/accounting' element = { Accounting } />
          <Route path = '/eventcoord' element = { EventCoord } />
          <Route path = '/logistics'  element = { Logistics } />
          <Route path = '/management' element = { Management } />
          <Route path = '/marketing'  element = { Marketing } /> 
          <Route path = '/techadmin'  element = { TechAdmin } />
          <Route path = '/signin'     element = { SignInPage } />
        </Routes>
      </div> */}

      <br />
      <h3>This is the Let's Go Event Management Application.</h3>

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
