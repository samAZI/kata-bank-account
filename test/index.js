const assert = require('assert');
const { createBankManager } = require('../src/index.js')

describe('Bank Account Management', function () {
	const BankManager = createBankManager()

    describe('default amount', function () {
    	it('should return 0', function () {
            assert.equal(BankManager.getBalance(), 0)
        })
    })

})

