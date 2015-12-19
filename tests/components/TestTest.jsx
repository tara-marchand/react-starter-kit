import {
    React,
    sinon,
    assert,
    expect,
    TestUtils
} from '../test_helper';

import VeryFirstDiv from '../../source/scripts/components/Test.jsx';

describe('empty test', function() {

    it('empty test should run successfully', function() {
        expect('A').to.equal('A');
    });

    it('should contain text: Lovely! Here it is - my very first React component!', function() {
        var myDiv = TestUtils.renderIntoDocument(
            <VeryFirstDiv />
        );
        var divText = TestUtils.findRenderedDOMComponentWithTag(myDiv, 'span');
        expect(divText.textContent).to.equal('Lovely! Here it is - my very first React component!');
    });
});
