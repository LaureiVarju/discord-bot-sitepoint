module.exports = {
  name: '!keys',
  description: 'spits key data from the entire file',
  execute(msg, args) {
    msg.reply(reportAllKeys())
    },
};

// populate an array based on JSON data, and spit back the array
const fs = require('fs');
// let rawdata = fs.readFileSync('../discord-bot-sitepoint/commands/users.json');
let rawdata = fs.readFileSync('../discord-bot-sitepoint/commands/new_data.json');
let userdata = JSON.parse(rawdata);

let number_of_users = userdata.users.length

function reportAllKeys() {

  let character_array = []
 
  //outer loop i is set by our overall user level
  for (let i = 0; i < number_of_users; i++) {

    // y is the amount of characters a user has
    // We need another loop here that populates all of the characters for the i user before incrementing i
    // y has to be intialized here and incremented

    for (let y = 0; y < userdata.users[i].characters.length; y++ ){
      console.log('value of y is ' + y)

      row_data = JSON.stringify(userdata.users[i].characters[y].weekly_key + ' ' + userdata.users[i].characters[y].name + ' ' + userdata.users[i].characters[y].class)
      //orginal
      // row_data = JSON.stringify(userdata.users[i].characters[y].weekly_key + ' ' + userdata.users[i].characters[y].name + ' ' + userdata.users[i].characters[y].class)
      cleaned_string = row_data.replace(/"/g, '')
      character_array.push(cleaned_string)
    }
    
    //if we reach this part of the loop, we're done
    if (i == number_of_users - 1) {
      console.log("i == number of users - 1")
      character_array.unshift('Keys for the week of: [date range]')
      character_array.push("This week's affixes are: [value(s)]")
      return character_array

    }
  }
}