
const fs=require("fs");
/**
 * The below code deals with getting the webserver ready
 * with accepting request body,
 * and runs on port 2022
 */
const express=require("express");
const application=express();
//add the two line below totell the express application that it should handle req body
application.use(express.json());
 application.use(express.urlencoded({extended:true}));
//=========================================================

 /**
  * the below code deals with reading an json file for faculty
  */

        function readFile(filename){
        return new Promise((resolve, reject)=>{
        fs.readFile(filename,(err,fileData)=>{
        if(err){
            reject("Error i reading the file");
        }else{
         const facultyStringData=fileData.toString();
         const  facultyJsonData=JSON.parse(facultyStringData);
         resolve(facultyJsonData);
             }
        });
    });
     //asynchronous way of reading a file
};

//=========================================

/**The below codedeals with calling readfile method and load the data in to students array 
*/


     let newfaculty=[];
       (async ()=>{
        newfaculty=await readFile("./newfaculty.json");
        // console.log(faculty,'faculty'); 
    })();
   //===================================================    
    
   /**
    * Get all faculty API end point
    */
         application.get("/allfaculty",(req,res)=>{
             res.send(newfaculty);
         });

            application.get("/allfaculty/gender/:gender",(req,res)=>{
            const filterFaculty=newfaculty.filter(facu=>facu.gender==req.params.gender);
            res.send(filterFaculty);
            });

            application.post("/allfaculty/create",(req,res)=>{
                const myFaculty={id:newfaculty.length+1,...req.body};
                newfaculty.push(myFaculty);
                fs.writeFileSync('./newfaculty.json',JSON.stringify(newfaculty));
                res.send(newfaculty);
            });
            application.put("/allfaculty/update/:facid",(req,res)=>{
                const updatFaculty=newfaculty.map(facult=>{
                    if(facult.id.toString()===req.params.facid){
                        const upFaculty={
                            ...facult,...req.body
                        };
                        return upFaculty;
                    }else{
                        return facult;
                    }
                });
                fs.writeFileSync('./newfaculty.json',JSON.stringify(updatFaculty));
                res.send(updatFaculty);
            });
            application.delete('/allfaculty/delete/:id',(req,res)=>{
                const remainingFaculty=newfaculty.filter(fac=>fac.id!=req.params.id);
                fs.writeFileSync('./newfaculty.json',JSON.stringify(remainingFaculty));
                res.send(remainingFaculty);
            })
    /**
     * The below code deals with assigning port 2022 port to the epress webserver
     */
         application.listen(2022,()=>{
            console.log("Application is up and running in the  port 2022");
        });