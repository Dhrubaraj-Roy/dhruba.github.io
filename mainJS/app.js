

 function sendmail(){
    
    var email = $('#Email').val();
    var subject = $('#Subject').val();
    var message = $('#Message').val();

    // var body = $('#body').val();

    var Body='Email: '+email+'<br>Subject: '+subject+'<br>Message: '+message;
    //console.log(name, phone, email, message);

    Email.send({
        // SecureToken:" 06e08013-79fe-4c45-80a7-f606196e2772",
        Host:"smtp.elasticemail.com",
        Username:"dhrubarajroy1@gmail.com",
        Password: "9EE4B8933ED4C63BFFA6D3EC75AE4E1B0A0D",
        Port: 2525,
        To: 'dhrubarjroy1@gmail.com',
        From: "dhrubarajroy123@gmail.com",
        Subject: "New message on contact from "+email,
        Body: Body
    }).then(
        message =>{
            //console.log (message);
            if(message=='OK'){
            alert('Your mail has been send. Thank you for connecting.');
            console.log(Body);
            }
            else{
                console.error (message);
                alert('There is error at sending message. ')
                
            }

        }
    );



}