function login(){
    //get the users
    let users = readUsers();

    //get the value from the inputs on the html
    let inputEmail=$("#txtEmail").val();
    let inputPassword=$("#txtPassword").val();
    let flag=true;

    //travel the array
    for(let i=0;i<users.length;i++){
        let user=users[i];
        if(inputEmail==user.email && inputPassword==user.password){
            flag=true;

            window.location="users.html";
            break;

        }
        else{
            flag=false;

        }
    }
    if(flag==false){
        alert("Email or password is incorrect")
    }

    //compare the inputsInfo vs arrayInfo
}
