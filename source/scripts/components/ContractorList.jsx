var React = require('react');
var objectAssign = require('object-assign');
var Contractor = require('./Contractor');

var ContractorList = React.createClass({

    render: function () {
        var listItems = [];
        var contractor;

        return
            {
                this.props.contractors.map(
                    function(contractor, index) {
                        return <Contractor key={index}
                            contractor={contractor}
                            handleNameClick={this.props.handleNameClick}
                            handleDeleteButtonClick={this.props.handleDeleteButtonClick}
                        />
                    }
                )
            }
            <div className="panel-body">
                <ul className="list-group contractor-list">
                    {listHtml}
                </ul>
            </div>
    }

});

module.exports = ContractorList;
