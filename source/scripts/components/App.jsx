var React = require('react');
var ContractorList = require('./ContractorList.jsx');

var Application = React.createClass({

    render: function () {
        return <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <ContractorList contractors={[
                        { id: 1, name: 'fred', url: 'http://www.fred.com/' },
                        { id: 2, name: 'wilma', url: 'http://www.wilma.com/' }
                    ]}  />
                </div>
            </div>
        </div>
    }

});

module.exports = Application;
