class user {
    constructor(email, password) {
        this.email = email;
        this.password = password;


    }

    get password() {
        return this._password.toUpperCase()
    }

    set password(value) {
        return this._password = value.toUpperCase()
    }

}

const uday = new user("uday@","abdd")
console.log(uday.password);