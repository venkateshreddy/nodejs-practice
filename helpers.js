const fileSystem = require("fs"); //helps to read and write files
module.exports = {
    save: (changes) => {
        fileSystem.writeFileSync('./employees.json', JSON.stringify(changes));
    },
    getData: () => {
        return new Promise((resolve, reject) => {
            //read employees json file
            console.log("Stage 1");
            fileSystem.readFile("./employees.json", (err, jsonData) => {
                console.log("Stage 2");
                if(err) {
                    console.log("error place")
                    reject(err);
                } else {
                    const employeesDataFromFile = jsonData.toString();
                    //and covert it to valid JSON and assign it to employees
                    const employees = JSON.parse(employeesDataFromFile);
                    resolve(employees);
                }
            })
        })
    }
}