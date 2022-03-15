
        const fileSystem=require("fs");
        module.exports={
            save:(changes)=>{
                fileSystem.writeFileSync('./facultyindex.json',JSON.stringify(changes));
            },
        myData:()=>{
            const jsonData=fileSystem.readFileSync("./facultyindex.json");
            const facultyDataFromFile=jsonData.toString();
            const faculty=JSON.parse(facultyDataFromFile);
            return faculty;
        }
        }