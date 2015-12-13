var React = require('react');
var ReactTransitionGroup = require('react-addons-transition-group');
var classnames = require('classnames');

var spinner = React.createClass({

    render: function() {
        var hideClass = (!this.props.isFetching) ?  ' hide' : '';

        return <ReactTransitionGroup transitionName='spinner' component='div' className='spinner-container'>
            <div className='heartbeat-loader' key='1'></div>
        </ReactTransitionGroup>;
    }

});

module.exports = spinner;
