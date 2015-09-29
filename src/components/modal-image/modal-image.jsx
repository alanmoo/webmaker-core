var React = require('react');
var Shim = require('../shim/shim.jsx');
var dispatcher = require('../../lib/dispatcher');

var ModalImage = React.createClass({
  getInitialState: function () {
    return {
      attribution: undefined,
      callback: null,
      image: ''
    };
  },
  show: function () {
    this.refs.shim.show();
  },
  hide: function () {
    this.refs.shim.hide();
  },
  onConfirmClick: function () {
    this.hide();

    if (this.state.callback) {
      this.state.callback.call();
    }
  },
  componentDidMount: function () {
    dispatcher.on('modal-image:show', (event) => {
      this.setState(React.__spread(this.getInitialState(), event.config));
      this.show();
    });

    dispatcher.on('modal-image:hide', (event) => {
      this.hide();
    });
  },
  render: function () {
    return (
      <Shim ref="shim" className="modal-image">
        <div className="window">
          <div className="content">
            <a className="close-modal"><img src="../../img/x.svg" onClick={this.onConfirmClick} width="15" height="15"/></a>
            <img src={this.state.image}/>
          </div>
        </div>
      </Shim>
    );
  }
});

module.exports = ModalImage;
