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

function isValid(user){
    let validation = true;

    if(user.email==""){
        $("#txtEmail").addClass("error");
        $("#notifications").append("Please add an email.").addClass("error");
        validation = false;
    }

    if(user.password==""){
        $("#txtPassword").addClass("error");
        $("#notifications").append("Please add a password.").addClass("error");
        validation=false;
    }

    if(user.fname==""){
        $("#txtFirstName").addClass("error");
        $("#notifications").append("Please add a first name.").addClass("error");
        validation = false;
    }

    if(user.lname==""){
        $("#txtLastName").addClass("error");
        $("#notifications").append("Please add a last name.").addClass("error");
        validation=false;
    }

    if(user.age==""){
        $("#txtAge").addClass("error");
        $("#notifications").append("Please add an age.").addClass("error");
        validation = false;
    }

    if(user.gender==""){
        $("#txtGender").addClass("error");
        $("#notifications").append("Please add a gender.").addClass("error");
        validation=false;
    }

    if(user.phone==""){
        $("#txtPhone").addClass("error");
        $("#notifications").append("Please add a phone number.").addClass("error");
        validation = false;
    }

    if(user.payment==""){
        $("#selPayment").addClass("error");
        $("#notifications").append("Please select a payment method.").addClass("error");
        validation=false;
    }

    if(user.color==""){
        $("#selColor").addClass("error");
        $("#notifications").append("Please select a color.").addClass("error");
        validation = false;
    }



    return validation;
}



function register(){
    let inputEmail = $("#txtEmail").val();
    let inputPassword = $("#txtPassword").val();
    let inputFirstName = $("#txtFirstName").val();
    let inputLastName = $("#txtLastName").val();
    let inputAge = $("#txtAge").val();
    let inputGender = $("#txtGender").val();
    let inputPhone = $("#txtPhone").val();
    let inputPayment = $("#selPayment").val();
    let inputColor = $("#selColor").val();

    let newUser = new User(inputEmail,inputPassword,inputFirstName,inputLastName,inputAge,inputGender,inputPhone,inputPayment,inputColor);
    if(isValid(newUser)){
    saveUser(newUser);//this fn is under storeManager
    }

}

function init(){
    //hook events
    $("#btnAdd").click(register);
}

window.onload=init;//run init after HTML is render
