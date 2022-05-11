import React from 'react';
import './Marketing.css';
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
const ReactDOM = require('react-dom');
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
class Marketing extends React.Component{
    state = {
        // insert starting variables
        
    }

    render(){
        return(
            
            <div style = {{ textAlign: 'center' }} >
                <h1>Marketing Page</h1>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                          <Container>
                          <Navbar.Brand href="/">Let's Go Event Manager</Navbar.Brand>
                          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                          <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
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
                      <div class="slider-container">
  <div class="slider">
    <div class="slides">
      <div id="slides__1" class="slide">
        <img src="https://agcdn-2mrybbgckm7omi0k.netdna-ssl.com/wp-content/uploads/2019/12/alphagamma-The-ultimate-list-of-startup-events-happening-in-Europe-in-2020-opportunities-1.jpg" class="slide" width="1500" height="800" />
        <a class="slide__prev" href="#slides__4" title="Next"></a>
        <a class="slide__next" href="#slides__2" title="Next"></a>
        
      </div>
      <div id="slides__2" class="slide">
      <img src="https://www.intoindiegames.com/wp-content/uploads/2019/09/PAX-West-photo.jpg" class="slide" width="1500" height="800" />
        <a class="slide__prev" href="#slides__1" title="Prev"></a>
        <a class="slide__next" href="#slides__3" title="Next"></a>
      </div>
      <div id="slides__3" class="slide">
      <img src="https://www.pcma.org/wp-content/uploads/2017/07/Event-Technology.jpg" class="slide" width="1500" height="800" />
        <a class="slide__prev" href="#slides__2" title="Prev"></a>
        <a class="slide__next" href="#slides__4" title="Next"></a>
      </div>
      <div id="slides__4" class="slide">
      <img src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaCUyMGV2ZW50fGVufDB8fDB8fA%3D%3D&w=1000&q=80" class="slide" width="1500" height="800" />
        <a class="slide__prev" href="#slides__3" title="Prev"></a>
        <a class="slide__next" href="#slides__1" title="Prev"></a>
      </div>
    </div>
    <div class="slider__nav">
      <a class="slider__navlink" href="#slides__1"></a>
      <a class="slider__navlink" href="#slides__2"></a>
      <a class="slider__navlink" href="#slides__3"></a>
      <a class="slider__navlink" href="#slides__4"></a>
    </div>
  </div>
</div>
<span class="slide__text">TECH EVENTS</span>
<div><img src="https://user-images.githubusercontent.com/6562690/54934415-b4d25b80-4edb-11e9-8758-fb29ada50499.png" class="wrapper" width="1500" height="800" /></div>
            </div>
            
        );

    }

}

export default Marketing;
