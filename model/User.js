function User (u) {
	this.email = u.email;
	// this.passwordHash = ?
	// this.passwordSalt = ?
}

User.create = function (u, cb) {
	if (u.password === u.password_confirm) {
		var user = new User(u)
	}

}

module.exports = User;