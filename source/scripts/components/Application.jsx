var React = require('react');

var Application = React.createClass({
    render: function () {
        return (
            <div className="container-fluid">

                <div className="row">
                    <div className="col-md-4 text-center">

                        Hi I am testing

                    </div>
                    <div className="col-md-8">

                        Hello

                    </div>
                </div>

            </div>
        );
    }
});

module.exports = Application;
