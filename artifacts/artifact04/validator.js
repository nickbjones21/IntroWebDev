function isValid() {
    if (firstName() && lastName())
    return true;
    else
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
}

FirstName.addEventListener('blur', firstName, false);
function firstName(){
    //1) Create variable
    var validFirstname=false;

    //2) read value from HTML
    var firstname = document.getElementById("FirstName").value;
    var errorMessages = "";

    //3) Do validation
    if (firstname==="null" || firstname==="" || firstname.length > 20 ) {
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
        console.log("First name invalid — length")
        } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid caracter in last name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("First name invalid — bad characters")
        } else {
                validFirstname = true;
                console.log("First name valid")
        };

    //4) Send error message to HTML
    document.getElementById("fname").innerHTML = errorMessages;

    //5) return status of each field
    return (validFirstname);
};

LastName.addEventListener('blur', lastName, false);
function lastName(){
    //1) Create variable
    var validLastname=false;

    //2) read value from HTML
    var lastname = document.getElementById("LastName").value;
    var errorMessages = "";

    //3) Do validation
    if (lastname==="null" || lastname==="" || lastname.length > 20 ) {
        errorMessages += "<p>The last name is required and cannot be greater than 20 characters</p>";
        console.log("Last name invalid — length")
        } else if (lastname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid caracter in last name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("Last name invalid — bad characters")
        } else {
                validLastname = true;
                console.log("Last name valid")
        };

    //4) Send error message to HTML
    document.getElementById("lname").innerHTML = errorMessages;

    //5) return status of each field
    return (validLastname);
};

EMail.addEventListener('blur', eMail, false);
function eMail(){
    //1) Create variable
    var validEmail=false;

    //2) read value from HTML
    var userEmail = document.getElementById("EMail").value;
    var atpos = userEmail.indexOf("@");
    var dotpos = userEmail.lastIndexOf(".");
    var errorMessages = "";

    //3) Do validation
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
    // send error message.  
       errorMessages = "<p>Invalid email</p>";
        }
    else{
       validEmail = true;
        console.log("Email valid")
        };

    //4) Send error message to HTML
    document.getElementById("email").innerHTML = errorMessages;

    //5) return status of each field
    return (validEmail);
};



PhoneNumber.addEventListener('blur', phoneNumber, false);
function phoneNumber(){
    //1) Create variable
    var validPhonenumber=false;

    //2) read value from HTML
    var phonenumber = document.getElementById("PhoneNum").value;
    var errorMessages = "";

    //3) Do validation
    if (isNaN(phonenumber) || phonenumber==="null" || phonenumber==="" || phonenumber.length > 14 ) {
        errorMessages += "<p>The phone # is required and cannot be greater than 14 characters</p>";
        console.log("Phone # invalid — length")
        } else if (phonenumber.match("^(?=.*(?:(?:\d[ -]?){1,12}))\d(?:[0-9 -]*\d)?$")===null) {
            errorMessages += "<p>Invalid caracter in phone #</p>";
            console.log("Phone # invalid — bad characters")
        } else {
                validPhonenumber = true;
                console.log("Phone # valid")
        };

    //4) Send error message to HTML
    document.getElementById("pnumber").innerHTML = errorMessages;

    //5) return status of each field
    return (validFirstname);
};
