function displayUsers(usersArray){
    //travel the array ** for() 
    
    //create the row with HTML code ** ` ${} `
    
    //insert the row int the table **append()

    const tableBody = document.getElementById("usersList");

    let rows = "";

    for (let i = 0; i < usersArray.length; i++) {
        let user = usersArray[i];
        rows += `
            <tr>
                <td>${user.email}</td>
                <td>${user.fname}</td>
                <td>${user.lname}</td>
                <td>${user.age}</td>
                <td>${user.gender}</td>
                <td>${user.phone}</td>
                <td>${user.payment}</td>
                <td>${user.color}</td>
            </tr>
        `;
        $("#usersList").append(rows);
    }

    //tableBody.innerHTML = rows;
}


function init(){
    console.log("Listing users...");
    //get users from the localstorage
    let users = readUsers();//getting an array
    

    //display the users
    displayUsers(users);
    
}

window.onload=init;
