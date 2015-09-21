
var React = require('react');
var ReactRouter = require('react-router');


// const createBrowserHistory = require('createBrowserHistory');


// var $ = require('jquery');

var UserGist = require('./UserGist.jsx');

// import history from './history';

// let history = createBrowserHistory();
//var createBrowserHistory = ReactRouter.History.CreateBrowserHistory.createBrowserHistory;
//var createBrowserHistory = ReactRouter.History.createBrowserHistory.createBrowserHistorY;

var createBrowserHistory = require( 'history/lib/createBrowserHistory');  


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
      <div>About
          <UserGist source="https://api.github.com/users/octocat/gists" />
      </div>
      ); 
  }
});



const Message = React.createClass({
  
  componentDidMount() {
    // from the path `/inbox/messages/:id`
    const id = this.props.params.id
    console.log("message id is " + id);
    // fetchMessage(id, function (err, message) {
    //  this.setState({ message: message })
    // })
  },

  render() {
    return <h3>Message</h3>
  }

});


const Inbox = React.createClass({

//  getInitialState() {
//    return { whoot: "whoot" }
//  },
 
  render() {
    console.log("whoot prop " + this.props.whoot);
//    var x = "hi";
//      <div>"a" + {x}</div>); 
    return (
      <div>
        <h2>Inbox</h2>
        {/* Render the child route component */}
        {this.props.children || "Welcome to your Inbox"}
      </div>
    );
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
        hi
        {this.props.children}
      </div>
    )
  }
})



// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.

//    <UserGist source="https://api.github.com/users/octocat/gists" />,
// <Router history={createBrowserHistory()} >

//  <Router  >
React.render((

  <Router history={createBrowserHistory()} >
    <Route path="/" component={ App } location="history">
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox } whoot="ggg" >
          <Route path="messages/:id" component={Message} />
      </Route>
    </Route>


  </Router>
), document.body)



