// //this file can test functions against the json data locally because readFileSync is acting differently when I just call this file
const fs = require('fs');

//this is how I successfully imported my array
// get a reference to your required module
var presets = require('../presets');

// name is a member of myModule due to the export above
var roles = presets.roles;
var keystones = presets.keystones;
var classes = presets.classes;
var regions = presets.regions;
var americas_and_oceanic_realms = presets.americas_and_oceanic_realms;


let rawdata = fs.readFileSync('new_data.json');
let userdata = JSON.parse(rawdata);


let id = userdata.users.length 
let discordid = "0012"
let character_name = "Chris"
let character_class = classes[3].replace(/\d/g, '').replace(/-/g, '').trim()
let weekly_key = keystones[2].replace(/\d/g, '').replace(/-/g, '').trim()
let key_level = "12"
let best_role = roles[1].replace(/\d/g, '').replace(/-/g, '').trim()
let second_best_role = roles[0].replace(/\d/g, '').replace(/-/g, '').trim()
let region = regions[0].replace(/\d/g, '').replace(/-/g, '').trim()
let realm = americas_and_oceanic_realms[5]

//create a new obj
var database_object = {
   
    "id": id,
    "discordid": discordid,
    "characters": [
        {
          "character_name": character_name,    
          "character_class": character_class,
          "weekly_key": weekly_key,
          "key_level": key_level,
          "best_role": best_role,
          "second_best_role": second_best_role,
          "region": region,
          "realm": realm
        }
   
    ]
}


//*****/ add a new character (to an existing user) /*****/
// remember to re-activate this

// userdata.users[1].characters.push(database_object.characters[0])

/*****/

//  /*****/ add a new user  /*****/
// remember to reactivate
userdata.users.push(database_object)

// console.log(JSON.stringify(userdata, null, 2))

//convert it to json using the json#stringify() method
var json = JSON.stringify(userdata, null, 2);

//write to the json file

const util = require('util')
const writeFile = util.promisify(fs.writeFile)
writeFile('new_data.json', json);


// //if you want to append, do this:
// fs.readFile('users.json', 'utf8', function readFileCallback(err, data){
//     if (err){
//         console.log(err);
//     } else {
//     obj = JSON.parse(data); //now it an object
//     obj.table.push({id: 2, square:3}); //add some data
//     json = JSON.stringify(obj); //convert it back to json
//     fs.writeFile('users.json', json, 'utf8', callback); // write it back 
// }});
