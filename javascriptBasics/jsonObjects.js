const company = {
    "name": "Vita Soft",
    "type": "IT Services",
    "DOE": "12-12-2002",
    "address": {
        "doorNumber": "1234",
        "building": "IT Towers",
        "line1": "Bypass road",
        "city": "KRMR",
        "state": "TS"
    },
    "management": [
        {
            person: {
                "name": "Suresh",
                "city": "Karimnagar",
                "state": "Telangana"
            },
            designation: "CEO"
        },
        {
            person: {
                "name": "Rajesh",
                "city": "Karimnagar",
                "state": "Telangana"
            },
            designation: "CTO"
        },
        {
            person: {
                "name": "Anitha",
                "city": "Karimnagar",
                "state": "Telangana"
            },
            designation: "Head HR"
        }
    ]   
}

//print keys and values of an unknown object
//approach 1
//const objectKeys = Object.keys(company);
// const objectValues = Object.values(company);
// for(let i=0; i < objectKeys.length; i++) {
//     console.log(objectKeys[i], objectValues[i])
// }
//approach 2 - efficient
// Object.keys(company).forEach(keyInTheIteration => {
//     console.log(key, company[keyInTheIteration]);
// })

//id    name        age         qualification       address
//-------------------------------------------------------------------------------------------------
//1     Suresh      30          Btech               "{ lane1: asdasd, lane2: asdasda, city: krmr }"


//convert object to a string
console.log(JSON.stringify(company), typeof JSON.stringify(company))
console.log("====================================")
const companyJsonString = `{"name":"Vita Technologies","type":"IT Development and Services","DOE":"12-12-2002","address":{"doorNumber":"1234","building":"IT Towers","line1":"Bypass road","city":"KRMR","state":"TS"},"management":[{"person":{"name":"Suresh","city":"Karimnagar","state":"Telangana"},"designation":"CEO"},{"person":{"name":"Rajesh","city":"Karimnagar","state":"Telangana"},"designation":"CTO"},{"person":{"name":"Anitha","city":"Karimnagar","state":"Telangana"},"designation":"Head HR"}]}`
const vitaTechObj = JSON.parse(companyJsonString);
console.log(vitaTechObj, typeof vitaTechObj)
