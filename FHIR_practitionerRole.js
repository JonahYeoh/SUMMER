function practitionerRole() {
    var text = {
        "resourceType": "PractitionerRole",
        "practitioner": {
            "reference": "Practitioner/1948445"
        },
        "organization": {
            "reference": "Organization/1945183"
        },
        "code": [
          {
              "coding": [
                {
                    "system": "http://hl7.org/fhir/practitioner-role",
                    "code": "nurse"
                }
              ]
          }
        ]
    }
    id_cookie = getCookie("practitionerId");
    text.practitioner.reference = "Practitioner/" + id_cookie;
    text.code[0].coding[0].code = document.getElementById("practitionerRole_main").value;
    var myJSON = JSON.stringify(text);
    HTTPPostData("http://hapi.fhir.org/baseDstu3/PractitionerRole", myJSON, "practitionerRole");
}