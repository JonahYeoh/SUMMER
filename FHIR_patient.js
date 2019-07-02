function patientPost() {
    var text =
    {
        "resourceType": "Patient",
        "text": {
            "status": "generated"
        },
        "identifier": [
            {
                "use": "usual",
                "type": {
                    "coding": [
                      {
                          "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                          "code": "MR"
                      }
                    ]
                },
                "assigner": {
                    "display": "Health Care for Christ"
                }
            }
        ],
        "active": "true",
        "name": [
            {
                "family": "Chalmers",
                "given": [
                    "Peter"
                ]
            }
        ],
        "telecom": [
            {
                "system": "phone",
                "value": "(03) 5555 6473",
                "use": "work"
            }
        ],
        "gender": "male",
        "birthDate": "1974-12-25",
        "deceasedBoolean": "false",
        "address": [
            {
                "use": "home",
                "text": "534 Erewhon St PeasantVille, Rainbow, Vic  3999",
                "line": [
                    "534 Erewhon St"
                ],
                "city": "PleasantVille",
                "district": "Rainbow",
                "state": "Vic",
                "postalCode": "3999"
            }
        ],
        "managingOrganization": {
            "reference": "Organization/1945183"
        }
    }

    text.name[0].family = document.getElementById("name2_main").value;
    text.name[0].given[0] = document.getElementById("name1_main").value;
    text.telecom[0].system = document.getElementById("tel_system_main").value;
    text.telecom[0].use = document.getElementById("tel_use_main").value;
    x = document.getElementById("yyyy_main").value;
    y = document.getElementById("mm_main").value;
    z = document.getElementById("dd_main").value;
    text.birthDate = x + "-" + y + "-" + z;
    text.gender = document.getElementById("sex_main").value;
    text.address[0].line[0] = document.getElementById("add_line_main").value;
    text.address[0].city = document.getElementById("add_city_main").value;
    text.address[0].postalCode = document.getElementById("add_postal_main").value;
    i = document.getElementById("add_line_main").value;
    j = document.getElementById("add_city_main").value;
    k = document.getElementById("add_postal_main").value;
    l = document.getElementById("add_country_main").value;
    text.address[0].text = i + ", " + j + ", " + k + ", " + l;

    var myJSON = JSON.stringify(text);
    HTTPPostData("http://hapi.fhir.org/baseDstu3/Patient", myJSON, "patient");
}
