function practitionerRole() {
    var text = {
        "resourceType": "PractitionerRole",
        "id":"",
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
    practitionerId = document.getElementById("pid").value;
    text.practitioner.reference = "Practitioner/" + practitionerId;
    text.code[0].coding[0].code = document.getElementById("role").value;
    text.id = practitionerId + "HFC";
    var myJSON = JSON.stringify(text);
    //HTTPPostData("http://hapi.fhir.org/baseDstu3/PractitionerRole", myJSON, "practitionerRole");
    var url = "http://hapi.fhir.org/baseDstu3/PractitionerRole/" + text.id;
    HTTPPutData(url, myJSON, "practitionerRole");
}