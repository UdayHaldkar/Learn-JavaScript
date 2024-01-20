class User{
    constructor(username){
        this.username =username
    }

    logMe(){
        console.log(`username id ${this.username}`);
    }
}

//inheritance

class teacher extends User{
     constructor(username, email, pass){
        //super refers to user class -> usernamr
       super(username)
       this.email=email
       this.pass =pass
    }

    addcourse(){
        console.log(`A new course in added by ${this.username}`);

    }

}

const teach =new teacher("abcc","gfdafd",12345)
teach.addcourse()