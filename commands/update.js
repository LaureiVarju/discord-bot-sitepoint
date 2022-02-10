module.exports = {
    name: '!update',
    description: 'Prompts a DM',
    execute(msg, args) {
        var presets = require('../presets');

        // name is a member of myModule due to the export above
        var roles = presets.roles;
        // import { roles } from '../presets.js';
        console.log(roles)
        msg.reply(roles);
        // msg.channel.send('pong');
    },
};





// get a reference to your required module
