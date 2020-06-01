todolist = document.getElementById("dragtodo");
editbutt = document.getElementById("editbutt");


console.log(todolist.children.length)



function edittodo() {

    if (editbutt.classList.contains ="click"){

        editbutt.innerHTML= "save"


    for(i=0; i<todolist.children.length; i++){

        todolist.children[i].setAttribute('draggable', true);
    
        
        console.log(i)
    }

    editbutt.classList.remove("click");
    editbutt.classList.add("clicked");

    }
    
    if (editbutt.classList.contains ="clicked"){

        editbutt.innerHTML= "click"
        editbutt.classList.remove("clicked");
        editbutt.classList.add("click");



    
    }

    






}




//google sign code//

function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);


