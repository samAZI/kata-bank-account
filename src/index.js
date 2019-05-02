
function createBankManager() {
	const account = {
		balance: 0
	}

	return {
        getBalance() {
			return account.balance
		},
        deposit(amount) {
        	if (!isNaN(amount) && amount > 0) {
                account.balance += amount
			}
		}
	}
}

module.exports = {
	createBankManager,
}