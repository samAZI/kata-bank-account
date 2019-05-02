const assert = require('assert');
const { createBankManager } = require('../src/index.js')

describe('Bank Account Management', function () {

    describe('default amount', function () {
        const BankManager = createBankManager()

    	it('should return 0', function () {
            assert.equal(BankManager.getBalance(), 0)
        })
    })

    describe('When I do a deposit of 10', function () {
        const BankManager = createBankManager()
        const depositAmount = 10

        BankManager.deposit(depositAmount)

    	it('should do return a balance of 10', function () {
            assert.equal(BankManager.getBalance(), 10)
	    })
    })


	describe('When I do a deposit of a negative value', function () {
        const BankManager = createBankManager()
		const depositAmount = -42

        BankManager.deposit(depositAmount)

		it('should ignore the deposit', function () {
            assert.equal(BankManager.getBalance(), 0)
		})
	})

    describe('When I do a deposit of something that is not a number', function () {
        const BankManager = createBankManager()
        const depositAmount = 'string-value'

        BankManager.deposit(depositAmount)

        it('should ignore the deposit', function () {
            assert.equal(BankManager.getBalance(), 0)
        })
    })

    describe('When I a do withdrawal', function () {
        const BankManager = createBankManager()
        const depositAmount = 10
        const withdrawalAmount = 5

        BankManager.deposit(depositAmount)
        BankManager.withdrawal(withdrawalAmount)

        it('should reduce the balance by the withdrawal amount', function () {
            assert.equal(BankManager.getBalance(), 5)
        })
    })

    describe('If I a do withdrawal superior to my balance', function () {
        const BankManager = createBankManager()
        const withdrawalAmount = 5

        BankManager.withdrawal(withdrawalAmount)

        it('it should works', function () {
            assert.equal(BankManager.getBalance(), -5)
        })
    })

    describe('When I do a withdrawal of a negative value', function () {
        const BankManager = createBankManager()
        const withdrawalAmount = -42

        BankManager.withdrawal(withdrawalAmount)

        it('should ignore the deposit', function () {
            assert.equal(BankManager.getBalance(), 0)
        })
    })

    describe('When I do a withdrawal of something that is not a number', function () {
        const BankManager = createBankManager()
        const withdrawalAmount = 'string-value'

        BankManager.withdrawal(withdrawalAmount)

        it('should ignore the withdrawal', function () {
            assert.equal(BankManager.getBalance(), 0)
        })
    })
	
})

