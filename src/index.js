//const fs = require('fs-extra');
//const path = require('path');

//console.log (__dirname);


//const readFile = async() => {
 //   try{
   //     const filePath = path.resolve(`${__dirname}/archivo.txt`);
     //   const data = await fs.promises.readFile(filePath, 'utf-8');
       // console.log(data);
    //}catch (error){
      //  console.log(error);
   // }
//}

//const writeFile = async() => {
  //  try{
    //    const filePath = path.resolve(`${__dirname}/nuevo.txt`);
      //  const data = await fs.promises.writeFile(filePath, 'se escribio en txt');
        //console.log(data);
    //}catch (error){
      //  console.log(error);
   // }
//}

//writeFile()

//readFile()

const fetch = require('./utils/api');
const{fetchApi, gretings} = fetch;

fetchApi('https://rickandmortyapi.com/api/character');
gretings();