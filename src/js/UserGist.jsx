
var React = require('react');
// http://rkulla.blogspot.com.au/2014/04/using-browserify-with-jquery-backbonejs.html
var $ = require('jquery');


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
        whoot is {this.state.whoot}
        <p />
        {this.state.username}'s last gist is
        <a href={this.state.lastGistUrl}>here</a>.
      </div>
    );
  }
});

module.exports = UserGist;
// export default UserGist ;  
