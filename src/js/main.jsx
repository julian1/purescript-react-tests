
var React = require('react');
var ReactRouter = require('react-router');

// First we import some components...
// import { Router, Route, Link } from 'react-router'

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
//var DefaultRoute = ReactRouter.DefaultRoute;
//var RouteHandler = ReactRouter.RouteHandler;


const About = React.createClass({
  render() {
    return (
      <div>About</div>); 
  }
});


const Inbox = React.createClass({
  render() {
    return (
      <div>Inbox</div>); 
  }
});
 

// Then we delete a bunch of code from App and
// add some <Link> elements...
const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        {/* change the <a>s to <Links>s */}
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>

        {/*
          next we replace `<Child>` with `this.props.children`
          the router will figure out the children for us
        */}
        {this.props.children}
      </div>
    )
  }
})

// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
React.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox} />
    </Route>
  </Router>
), document.body)



