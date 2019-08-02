var result = [];
$(document).ready(function(){
    
     $("#loginButton").click(function(){
        validate();
        username = $('#username').val();
        password =$('#password').val();

        console.log(username);
        console.log(password);

     $.ajax({url: "https://bhunaksha.ap.gov.in/REST/getTaluk_District_Village/'"+username+"'/'"+password+"'", success: function(data){
              
        console.log(data);

        for(i in data){
                result.push(data[i]);
            }

            if(result.length==0){

               alert("please  check your login credentials")
            }

    
          console.log(result[0][0]);
              
               if(username == result[0][0].user_name  & password == result[0][0].password){

                location.replace("Status_Underconstruction.html")
                  }
               else{
                    alert("login failed");
                } 
               
            
    }});


    
  });

 

});




function validate(){

    var focusSet = false;
        if (!$('#username').val()) {
            if ($("#username").parent().next(".validation").length == 0) // only add if not added
            {
                $("#username").parent().after("<div class='validation' style='color:red;margin-bottom: 20px;'>Please enter username</div>");
            }
            e.preventDefault(); // prevent form from POST to server
            $('#username').focus();
            focusSet = true;
        } else {
            $("#username").parent().next(".validation").remove(); // remove it
        }
        if (!$('#password').val()) {
            if ($("#password").parent().next(".validation").length == 0) // only add if not added
            {
                $("#password").parent().after("<div class='validation' style='color:red;margin-bottom: 20px;'>Please enter password</div>");
            }
            e.preventDefault(); // prevent form from POST to server
            if (!focusSet) {
                $("#password").focus();
            }
        } else {
            $("#password").parent().next(".validation").remove(); // remove it
        }
}

