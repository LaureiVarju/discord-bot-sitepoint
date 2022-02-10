module.exports = {
  name: '!adduser',
  description: 'Add a user to the database and 1 character',
  execute(msg, args) {
    msg.author.send(`Hey there ${msg.author.username}, let's add a character to my database :)`)
    msg.author.send("What is the name of the character you want to enter?");


    const fs = require('fs');
    const presets = require('../presets');
    const util = require('util');

    //this is how I successfully imported my array
    // get a reference to your required module


    // name is a member of myModule due to the export above
    let roles = presets.roles;
    let keystones = presets.keystones;
    let classes = presets.classes;
    let regions = presets.regions;
    let americas_and_oceanic_realms = presets.americas_and_oceanic_realms;


    let rawdata = fs.readFileSync('../discord-bot-sitepoint/commands/new_data.json');
    let userdata = JSON.parse(rawdata);


    let id = userdata.users.length
    let discordid = msg.author.id
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


    var json = JSON.stringify(userdata, null, 2);

    const writeFile = util.promisify(fs.writeFile)
    writeFile('../discord-bot-sitepoint/commands/new_data.json', json);

    // msg.reply("response 2");

  },
};
