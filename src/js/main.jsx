
var React = require('react');
var ReactRouter = require('react-router');

var $ = require('jquery');


// First we import some components...
// import { Router, Route, Link } from 'react-router'

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
//var DefaultRoute = ReactRouter.DefaultRoute;
//var RouteHandler = ReactRouter.RouteHandler;



var UserGist = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      lastGistUrl: '',
      whoot: 'whoot'
    };
  },

  componentDidMount: function() {
    $.get(this.props.source, function(result) {
      var lastGist = result[0];
      if (this.isMounted()) {
        this.setState({
          username: lastGist.owner.login,
          lastGistUrl: lastGist.html_url
        });
      }
    }.bind(this));
  },

  render: function() {
    return (
      <div>
        whoot is {this.props.whoot}
        {this.state.username}'s last gist is
        <a href={this.state.lastGistUrl}>here</a>.
      </div>
    );
  }
});



const About = React.createClass({
  render() {
    return (
      <div>About
          <UserGist source="https://api.github.com/users/octocat/gists" />
      </div>
      ); 
  }
});


const Inbox = React.createClass({

  getInitialState() {
    return { whoot: "whoot" }
  },
 
  render() {
    console.log("props " + this.props.whoot);
    var x = "hi";
    return (
      <div>"a" + {x}</div>); 
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
React.render((
  <Router>
    <Route path="/" component={ App }>
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox } whoot="ggg" />
    </Route>


  </Router>
), document.body)



