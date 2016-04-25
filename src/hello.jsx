var React = require('react');
var ReactDOM = require('react-dom');

var Hello = React.createClass({
    getDefaultProps: function() {
        console.log("getDefaultProps");
        return {
            name: "Nothing"
        };
    },
    getInitialState: function() {
        console.log("getInitialState");
        return {};
    },
    componentWillMount: function() {
        console.log('componentWillMount');
    },
    componentDidMount: function() {
        console.log('componentDidMount');
    },
    componentWillReceiveProps: function() {
        console.log("componentWillReceiveProps");
    },
    shouldComponentUpdate: function() {
        console.log('shouldComponentUpdate');
        return true;
    },
    componentWillUpdate: function() {
        console.log('componentWillUpdate');
    },
    componentDidUpdate: function() {
        console.log('componentDidUpdate');
    },
    componentWillUnmount: function() {
        console.log("componentWillUnmount");
    },
    render: function() {
        console.log("render");
        return <h1 className="red">
            Hello {this.props.name}!
        </h1>
    }
});

module.exports = Hello;