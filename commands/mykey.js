module.exports = {
  name: '!mykey',
  description: 'returns key data for the user',
  execute(msg, args) {
    console.log(message.member.user.tag );
    msg.channel.send(message.member.user.tag );

  },
};

//msg.author.id



const discord = require('discord.js')

// new Discord.Client(options);
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
