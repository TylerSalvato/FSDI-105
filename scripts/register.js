//create a constructor for an user objects
function User(email,pass,fname,lname,age,gender,phone,payment,color)
{
    this.email=email;
    this.password=pass;
    this.fname=fname;
    this.lname=lname;
    this.age=age;
    this.gender=gender;
    this.phone=phone;
    this.payment=payment;
    this.color=color;
}

function register(){
    let inputEmail = $("#txtEmail").val();
    let inputPassword = $("txtPassword").val();
    
}