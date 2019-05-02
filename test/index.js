const assert = require('assert');
const { createBankManager } = require('../src/modules/bankManager')

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

    describe('When I dit nothing and I want to see history', function () {
        const BankManager = createBankManager()

        it('should return an empty array', function () {
            assert.deepEqual(BankManager.history(), [])
        })
    })

    describe('When I want to see history after one deposits', function () {
        const BankManager = createBankManager()
        BankManager.deposit(42)

		const expectedHistory = [{
            operation: 'deposit',
			date: new Date().toJSON().slice(0, 10),
			amount: 42,
			balance: 42
		}]

        it('should return the expected history', function () {

            assert.deepEqual(BankManager.history(), expectedHistory)
        })
    })

    describe('When I want to see history after many deposits', function () {
        const BankManager = createBankManager()
        BankManager.deposit(5)
        BankManager.deposit(3)
        BankManager.deposit(42)

        const expectedHistory = [{
            operation: 'deposit',
            date: new Date().toJSON().slice(0, 10),
            amount: 42,
            balance: 50
        }, {
            operation: 'deposit',
            date: new Date().toJSON().slice(0, 10),
            amount: 3,
            balance: 8
        }, {
            operation: 'deposit',
            date: new Date().toJSON().slice(0, 10),
            amount: 5,
            balance: 5
        }]

        it('should return the expected history', function () {
            assert.deepEqual(BankManager.history(), expectedHistory)
        })
    })

    describe('When I want to see history after one withdrawal', function () {
        const BankManager = createBankManager()
        BankManager.withdrawal(10)

        const expectedHistory = [{
            operation: 'withdrawal',
            date: new Date().toJSON().slice(0, 10),
            amount: 10,
            balance: -10
        }]

        it('should return the expected history', function () {
            assert.deepEqual(BankManager.history(), expectedHistory)
        })
    })

    describe('When I want to see history after many withdrawals', function () {
        const BankManager = createBankManager()
        BankManager.withdrawal(50)
        BankManager.withdrawal(40)
        BankManager.withdrawal(10)

        const expectedHistory = [{
            operation: 'withdrawal',
            date: new Date().toJSON().slice(0, 10),
            amount: 10,
            balance: -100
        }, {
            operation: 'withdrawal',
            date: new Date().toJSON().slice(0, 10),
            amount: 40,
            balance: -90
       }, {
            operation: 'withdrawal',
            date: new Date().toJSON().slice(0, 10),
            amount: 50,
            balance: -50
        }]

        it('should return the expected history', function () {
            assert.deepEqual(BankManager.history(), expectedHistory)
        })
    })
    
})

