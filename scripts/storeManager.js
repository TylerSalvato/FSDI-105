function saveUser(aUser){
    let users = readUsers();
    users.push(aUser);
    let val = JSON.stringify(users); //parse obj into string
    localStorage.setItem("users",val);//send the string to the localStorage
}

function readUsers(){
    //get the elements under the LS
    let users = localStorage.getItem("users")
    
    if(!users){ //NOT users?
        return [];
    }else{
        //it means that we have users into the LS
        return JSON.parse(users);//parse back JSON into obj
    }
}
