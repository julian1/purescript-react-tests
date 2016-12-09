
var React = require('react');
var ReactRouter = require('react-router');

// import { Router, Route, Link, History } from 'react-router';
// const createBrowserHistory = require('createBrowserHistory');


// var $ = require('jquery');

var UserGist = require('./UserGist.js');
var ContactForm = require('./ContactForm.js');

// this works!
var Main = require('../../output/Main/index.js');


// https://github.com/rackt/react-router/blob/master/docs/guides/basics/Histories.md
var createBrowserHistory = require( 'history/lib/createBrowserHistory');  

var history = createBrowserHistory()

// First we import some components...
// import { Router, Route, Link } from 'react-router'

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var IndexRoute = ReactRouter.IndexRoute;
//var DefaultRoute = ReactRouter.DefaultRoute;
//var RouteHandler = ReactRouter.RouteHandler;


console.log( 'here')

const Home = React.createClass({
  render() {
    return (
      <div>Home</div>
      ); 
  }
});

// TODO if we only use require for the specific items we want it might reduce the size...
var Bootstrap = require('react-bootstrap');
var Alert = Bootstrap.Alert;
var Button = Bootstrap.Button;
var Navbar = Bootstrap.Navbar;
var Nav = Bootstrap.Nav;
var NavDropdown = Bootstrap.NavDropdown;
var MenuItem = Bootstrap.MenuItem;
var NavItem = Bootstrap.NavItem;

var ReactRouterBootstrap = require('react-router-bootstrap'); 
var LinkContainer = ReactRouterBootstrap.LinkContainer;


const About = React.createClass({
  render() {
    return (
      <div>About
           <Button bsStyle="primary" bsSize="medium">Medium button</Button>
          <Button bsSize="medium">Large button</Button>
          <UserGist source="https://api.github.com/users/octocat/gists" />
          <ContactForm  value={ { name : Main.main  }  }  />
      </div>
      ); 
  }
});



const Message = React.createClass({
  render() {
    return <h3>Message {this.props.params.id}</h3>
  }
});



const navbarInstance = ( 
  <Navbar brand="React-Bootstrap">
    <Nav history={history}>
      { /* this works but does a complete reload */ }
      <NavItem eventKey={2} href="/about">About</NavItem>
      <NavItem eventKey={2} href="/inbox">Inbox</NavItem>

     
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey="1">Action</MenuItem>
        <MenuItem eventKey="2">Another action</MenuItem>
        <MenuItem eventKey="3">Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="4">Separated link</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
  );


const MyInput = React.createClass({
    render() { 
      return (
        React.createElement("input", {
          // The callback passed to `onChange` will be called when `value` should change
          onChange: function(syntheticEvent) {
              // Log new `value` to JavaScript console
              console.log(syntheticEvent.target.value)
          }
        })
      )
    }
});


const Inbox = React.createClass({
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        <MyInput/>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
})



// this class uses router Link 

// Then we delete a bunch of code from App and
// add some <Link> elements...

// so we want to replace this entire thing with our navbar

const App = React.createClass({
  render() {
    return (
      <div>
        {/* <div>{navbarInstance}</div> */ }
        <Navbar brand="React-Bootstrap">
          <Nav history={history}>
            { /* this works but does a complete reload */ }
            <NavItem eventKey={2} href="/about">About</NavItem>
            <NavItem eventKey={2} href="/inbox">Inbox</NavItem>

              <LinkContainer to="/about">
                <NavItem>About</NavItem>
              </LinkContainer>

              <LinkContainer to="/inbox">
                <NavItem>Inbox</NavItem>
              </LinkContainer>
           
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey="1">Action</MenuItem>
              <MenuItem eventKey="2">Another action</MenuItem>
              <MenuItem eventKey="3">Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4">Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>

        <h1>App</h1>
        {/* change the <a>s to <Links>s */}
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
          <li><Link to="/inbox/messages/123">Message 123</Link></li>
        </ul>

        {/*
          next we replace `<Child>` with `this.props.children`
          the router will figure out the children for us
        */}
        hi
        {this.props.children}
      </div>
    )
  }
})



// React.render(navbarInstance, mountNode);



// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.

//    <UserGist source="https://api.github.com/users/octocat/gists" />,
// <Router history={createBrowserHistory()} >

//  <Router  >
// <Route path="*" component={App}/>





React.render((
  <Router history={history} >
    <Route path="/" component={ App } location="history">
      <IndexRoute component={Home}/>
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox } whoot="ggg" >
          {/* Use /messages/:id instead of messages/:id to unnest */}
          <Route path="messages/:id" component={Message} />

      </Route>
    </Route>
  </Router>
), document.body)



