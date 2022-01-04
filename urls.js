const fs = require("fs");
const axios = require("axios");
const proccess = require("process");

/*
    Sets Variables for the command line.
    Reads files presented by command line.
    Splits each line in file into 1 for easier use later
*/
let arguments = proccess.argv;
let file = arguments[arguments.length-1];
const data = fs.readFileSync(file,"utf8");
const lines = data.split('\n');


/*
    creates files based on the lines provided in the file read above.
    ****IS THIS NOT SET UP IN ERROR FIRST FORM? if so why doesnt the bad url get read "first"?****

*/
    let createFiles = async function () {
        for(line of lines){
            try{
            // runs a get request at each string in the array lines //
            let siteRequest = await axios.get(line);
            // get and set html data from request made above//
            let htmlData = siteRequest.data;  
            //this splits the string at  "/" in order to create filename//
            let fileNameArr = line.split('/');
            //sets FileName from fileNameArr//
            let fileName = fileNameArr[2];
            // Writes file given filename, the htmldata, and a callback to handle errors//
            fs.writeFile(`${fileName}`,htmlData,(err)=> {
                if(err){
                    return proccess.exit();
                }

                else{
                console.log("File Was Written");
                console.log(`${fileName} was created`);
                }});
            } 
            catch(err){
                console.log(`Couldnt download ${line}` );
            }
            
        }
       
   }
   createFiles();








