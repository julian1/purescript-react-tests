
var React = require('react');

var ContactForm = React.createClass({
  propTypes: {
    value: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      React.createElement('form', {className: 'ContactForm'},
        React.createElement('input', {
          type: 'text',
          placeholder: 'Name (required)',
          value: this.props.value.name,
        }),
        React.createElement('input', {
          type: 'email',
          placeholder: 'Email',
          value: this.props.value.email,
        }),
        React.createElement('textarea', {
          placeholder: 'Description',
          value: this.props.value.description,
        }),
        React.createElement('button', {type: 'submit'}, "Add Contact")
      )
    )
  },
});

module.exports = ContactForm;

