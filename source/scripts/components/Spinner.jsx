import React from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
import classnames from 'classnames';

class spinner extends React.Component {
    render() {
        var hideClass = (!this.props.isFetching) ?  ' hide' : '';

        return (
            <ReactTransitionGroup transitionName='spinner' component='div' className='spinner-container'>
                <div className='heartbeat-loader' key='1'></div>
            </ReactTransitionGroup>
        )
    }
}

export default spinner;
