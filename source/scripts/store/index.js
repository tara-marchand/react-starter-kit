var Redux = require('redux');
var ContractorReducers = require('../reducers/ContractorReducers');

module.exports = Redux.createStore(ContractorReducers);
