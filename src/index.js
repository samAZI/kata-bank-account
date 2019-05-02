
function createBankManager() {
	const account = {
		balance: 0,
		history: {}
	}

	return {
        getBalance() {
			return account.balance
		},
        deposit(amount) {
        	if (!isNaN(amount) && amount > 0) {
                account.balance += amount
			}
		},
        withdrawal(amount) {
            if (!isNaN(amount) && amount > 0) {
                account.balance -= amount
            }
		},
		history() {
        	return account.history
		}
	}
}

module.exports = {
	createBankManager,
}