function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
  //  var filter = /^(\([-+]?[0-9]+)\)$/;
  var filter=/(?:\(\d{3}\))([-])\d{3}\1\d{4}/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}
$(document).ready(function(){


    $("#phone").on("change", function(){
        if (!validatePhone("phone")){
            alert("Wrong format for phone number. \nIt must be in the format (xxx)-xxx-xxxx, where each x is a number.");
            $("#phone").val("(xxx)-xxx-xxxx");
            $("#phone").addClass("error");
        }
        else {
            $("#phone").removeClass("error");
        }
    });})