var testdom = require('testdom')('<html><body></body></html>');
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var expect = require('chai').expect;

describe('empty test', function() {

    it('empty test should run successfully', function() {
        expect('A').to.equal('A');
    });

    it('should contain text: Lovely! Here it is - my very first React component!', function() {
        var VeryFirstDiv = require('../../source/scripts/components/Test.jsx');
        var myDiv = TestUtils.renderIntoDocument(
            <VeryFirstDiv />
        );
        var divText = TestUtils.findRenderedDOMComponentWithTag(myDiv, 'span');
        expect(divText.textContent).to.equal('Lovely! Here it is - my very first React component!');
    });
});
