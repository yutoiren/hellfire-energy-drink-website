$("document").ready(function() {
    $("#test").click(function() {
        $("input").css("background-color", "");
        let isValid = true;
        let phonePattern = /^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/;
        let mailPattern = /\@.+\./
        let creditCardPattern = /^[0-9]{16}$/; 

            isValid = false;
        
        if ($("#street").val() == "") {
            $("#street").css("background-color", "red");
            isValid = false;
        }
        if ($("#phnum").val() == "" || !phonePattern.test($("#phonenum").val())) {
            $("#phnum").css("background-color", "red");
            isValid = false;
        }
        if ($("#email").val() == "" || !mailPattern.test($("#email").val())) {
            $("#email").css("background-color", "red");
            isValid = false;
        }
        if ($("#cardnum").val() == "" || !creditCardPattern.test($("#cardnum").val())) {
            $("#cardnum").css("background-color", "red");
            isValid = false;
        }
    });
});
