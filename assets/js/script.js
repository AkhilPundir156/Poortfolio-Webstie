function SendMail(){
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        mobile_no : document.getElementById("tel_no").value,
        message : document.getElementById("message").value,
    }
    emailjs.send("service_kcy5tk6","template_xyuce4m",params).then(function (res){
        alert("Success!" + res.status);
    })
}