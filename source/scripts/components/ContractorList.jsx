var React = require('react');
var objectAssign = require('object-assign');
var Contractor = require('./Contractor');

var ContractorList = React.createClass({

    render: function () {
        return <div className="panel-body">
            <ul className="list-group contractor-list">
                {this.props.contractors.map(
                    function(contractor, index) {
                        return <Contractor key={index}
                            contractor={contractor}
                            handleNameClick={this.props.handleNameClick.bind(null, index)}
                            handleDeleteButtonClick={this.props.handleDeleteButtonClick.bind(null, index)}
                        />
                }, this)}
            </ul>
        </div>

    }

});

module.exports = ContractorList;
