//JavaScripts
    //hide the txtEmail
    //document.getElementById("txtEmail").style.display = "none";

    //hide the labels
    //for (let i=0; i < 2; i++){
        //document.getElementsByTagName("label")[i].style.display = "none";
    //}

    //document.getElementsByClassName("menu")[0].style.display = "none";



//JQuery
$("#txtPassword").hide();
//$("#txtEmail").hide();
$("label").hide();
$(".menu a:first").hide();

//Second example
$("#btnAdd").on('click', example);
function example()
{
    $(".form").hide();
}
//please show the form again when you click the header
//remember that header is a Tag
$("header").on('click', showForm);
function showForm(){
    $(".form").show();
}
