module.exports = {
  name: '!keys',
  description: 'spits key data from the entire file',
  execute(msg, args) {
    msg.reply((JSON.stringify(userdata.users[0].characters, null, 2).replace(/]|[[]/g, '')).replace(/}|{/g, ''));
    // msg.reply((JSON.stringify(userdata.users[0].characters, null, 2).replace(/]|[[]/g, '')).replace(/}|{/g, ''));

    // msg.reply((JSON.stringify(userdata.users[0].characters[0].name)));
    // console.log((userdata.users[0].characters[0].name));
    // msg.channel.send('pong');
  },
};



// populate an array based on JSON data, and spit back the array

const fs = require('fs');
let rawdata = fs.readFileSync('../discord-bot-sitepoint/commands/users.json');
let userdata = JSON.parse(rawdata);

function replacer(key, value) {
  // Filtering out properties
  if (typeof value === 'string') {
    return '';
  }
  return value;
}




// console.log(userdata.users[0]);
// console.log(userdata.users[0].characters);


// var jsonString = '{"some":"json"}';
// var jsonPretty = JSON.stringify(JSON.parse(jsonString),null,2);  
