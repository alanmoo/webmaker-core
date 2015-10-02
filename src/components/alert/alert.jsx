var React = require('react');

var Alert = React.createClass({
  getInitialState: function () {
    return {
      isVisible: false
    };
  },
  show: function () {
    this.setState({
      isVisible: true
    });
  },
  componentDidMount: function(){
    this.getDOMNode().addEventListener('touchStart', e => {this.setState({touched: true}); console.log(this.state);});
  },
  hide: function () {
    this.setState({
      isVisible: false
    });
  },
  render: function () {
    return (
      <div className={'alert' + (this.state.isVisible ? '' : ' hidden') }>
        <div className="hidden dismiss"></div>
        <span className="text">{this.props.children}</span>
        <div onClick={this.hide} className="dismiss"></div>
      </div>
    );
  }
});

module.exports = Alert;
