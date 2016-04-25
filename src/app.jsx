var React = require('react');
var ReactDOM = require('react-dom');
var Hello = require('./hello');

var Main = React.createClass({
    getDefaultProps: function() {
        return {
            name: "World"
        };
    },
    getInitialState: function() {
        return {
            name: "World"
        }
    },
    render: function() {
        return (
            <div>
                <Hello name={this.state.name}/>
                <button onClick={this._sendProps}>Send props</button>
            </div>
        )
    },
    _sendProps: function() {
        this.setState({
            name: "React"
        });
    }
});

var element = React.createElement(Main, {});
ReactDOM.render(element, document.querySelector('.container'));
