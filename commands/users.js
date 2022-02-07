

const fs = require('fs');
//assuming your bot has args
// let reason = args.slice(1,2) //removes the command and the @
// let user = message.mentions.users.first()



let rawdata = fs.readFileSync('users.json');
let userdata = JSON.parse(rawdata);
// console.log(userdata.users[0]);

console.log(userdata.users[0].characters);




//////////////////////// future features

// //create a new obj
// var obj = {
//    table: []
// };

// //add some data to it e.g.
// obj.table.push({reason: `${reason}`, user:`${user.username}`});

// //convert it to json using the json#stringify() method
// var json = JSON.stringify(obj);

// //write to the json file
// fs.writeFile('users.json', json, 'utf8', callback);

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

// console.log(student);