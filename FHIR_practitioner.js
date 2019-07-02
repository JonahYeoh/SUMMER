function parse() {
    var text =
    {
        "resourceType": "Practitioner",
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
                "family": "demo",
                "given": [
                    "demo"
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
        "address": [
            {
                "use": "home",
                "text": "535 Erewhon St PeasantVille, Rainbow, Vic  3999",
                "line": [
                    "535 Erewhon St"
                ],
                "city": "PleasantVille",
                "district": "Rainbow",
                "state": "Vic",
                "postalCode": "3991"
            }
        ],
        "qualification": [
            {
                "identifier":
                    {
                        "use": "official",
                        "assigner": {
                            "display": "Healing University Of Medicine"
                        }
                    },
                "code": {
                    "coding": [
                      {
                          "system": "http://terminology.hl7.org/CodeSystem/v2-0360/2.7",
                          "code": "BS"
                      }
                    ]
                },
                "period": {
                    "start": "1995"
                }
            }
        ]
    }
    text.name[0].family = document.getElementById("name2_main").value;
    text.name[0].given[0] = document.getElementById("name1_main").value;
    text.telecom[0].system = document.getElementById("tel_system_main").value;
    text.telecom[0].use = document.getElementById("tel_use_main").value;
    x = document.getElementById("yyyy_main").value;
    y = checkTime(document.getElementById("mm_main").value);
    z = checkTime(document.getElementById("dd_main").value);
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
    text.qualification[0].identifier.assigner.display = document.getElementById("uni_main").value;
    text.qualification[0].code.coding[0].code = document.getElementById("q_level_main").value;
    text.qualification[0].period.start = document.getElementById("q_since_main").value;

    var myJSON = JSON.stringify(text);
    HTTPPostData("http://hapi.fhir.org/baseDstu3/Practitioner", myJSON, "practitioner");
    // how can I trigger the function of the main page?
}