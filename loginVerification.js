function loginVerification(ret, option) {
    var text = JSON.parse(ret);
    if (text.total == 0) {
        alert("Sorry");
        if (option == "Patient")
            window.open("patient_directory.html", "test", "width=1366, height=768, toolbar=yes, location=no");
        else {
            window.open("practitioner_directory.html", "test", "width=1366, height=768, toolbar=yes, location=no");
            setCookie("practitionerId", "guest", 1);
        }
    }
    else {
        alert("Welcome");
        id = text.entry[0].resource.id;
        if (option == "Patient") {
            setCookie("patientId", id, 1);
            alert("I have nothing to share for the time being");
        }
        else {
            setCookie("practitionerId", id, 1);
            window.open("mainPage.html", "test", "width=1366, height=768, toolbar=yes, location=no");
        }
    }
}
