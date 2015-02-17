var React = require('react');
var Reflux = require('reflux');
var request = require('superagent');

var Store = Reflux.createStore({
    data: { message: 'Hello World' },

    init() {
        request('http://echo.jsontest.com/message/Updated!', res => {
            this.data.message = res.body.message;
            this.trigger(this.data);
        })
    },

    getInitialState() {
        return this.data;
    }
})

var App = React.createClass({
    mixins: [Reflux.connect(Store)],

    render() {
        return (
            <h1>{this.state.message}</h1>
        );
    }
})

React.render(<App/>, document.getElementById('app'));
