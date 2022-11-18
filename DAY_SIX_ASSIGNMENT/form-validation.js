function printError(elemId, message) {
    document.getElementById(elemId).innerHTML = message;
}

var submit=document.getElementById("loginButton")
submit.onclick= function(){
    validateForm();
};

function validateForm() {
    var form = document.getElementById("myForm");
    var name = form.name.value;
    var phone = form.phone.value;
    var email = form.email.value;
    var gender = form.gender.value;
    var qual = form.qualification.value;
    var course = form.course.value;
    var country = form.country.value;
    var terms = form.conditions.value;
    var comments = form.comments.value;

    var userNameErr = true;
    var phoneNumErr = true;
    var emailErr = true;
    var genderErr = true;
    var qualErr = true;
    var courseErr = true;
    var countryErr = true;
    var termsErr = true;
    var commentsErr = true;

    // NAME
    if (name == "") {
        printError("userNameErr", "Please Enter Your Name.");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
        printError("userNameErr", "Please Enter a Valid Name.");
        } else {
        printError("userNameErr", "");
        userNameErr = false;
        }
    }

    // PHONE 
    if (phone == "") {
        printError("phoneNumErr", "Please Enter a phone number.")
    } else {
        var regex = /^[1-9]\d{9}$/;
        if (regex.test(phone) === false) {
        printError("phoneNumErr", "Please Enter a Valid 10 Digit Phone Number");
        } else {
        printError("phoneNumErr", "");
        phoneNumErr = false;
        }
    }

    // EMAIL
    if (email == "") {
        printError("emailErr", "Please Enter Your Email Address.");
    }
    if (!(email.includes("@"))) {
        printError("emailErr", "Please Enter a Valid Email Address.");
    } else {
        printError("emailErr", "");
        emailErr = false;
    }

    // GENDER 
    if (gender == "") {
        printError("genderErr", "Please Select your Gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }

    // QUALIFICATION
    if (qual == "") {
        printError("qualErr", "Please Select your Qualification");
    } else {
        printError("qualErr", "");
        qualErr = false;
    }

    // COURSE
    if (course == "") {
        printError("courseErr", "Please Select your Course");
    } else {
        printError("courseErr", "");
        courseErr = false;
    }

    // COUNTRY
    if (country == "") {
        printError("countryErr", "Please Select your Country");
    } else {
        printError("countryErr", "");
        countryErr = false;
    }

    // TERMS 
    if (terms == "") {
        printError("termsErr", "Please Agree To The Terms");
    } else {
        printError("termsErr", "");
        termsErr = false;
    }

    // COMMENTS 
    if (comments == "") {
        printError("commentsErr", "Please comment out your valuable opinion.");
    } else {
        printError("commentsErr", "");
        commentsErr = false;
    }

    if ((userNameErr || phoneNumErr || emailErr || genderErr || qualErr || commentsErr ||countryErr || courseErr || termsErr) == true) {
        return false;
    } else {
        var dataPreview = 
            `You have entered the following details.\n
            Name - ${name}\n
            Phone - ${phone}\n
            Email - ${email}\n
            Gender - ${gender}\n
            Qualification - ${qual}\n
            Course - ${course}\n
            Country - ${country}\n`
    }

    alert(dataPreview);
}