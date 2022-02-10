# TODO
add colors? to keys? to classes? to names? 
Find consts and update their naming
find poorly named functions like tell_joke and fix them to tellJoke()

Fixes:
-gettime code will only work from EST currently (grabbing local time and adding + is Bad(tm))
-populate arrays instead of spitting JSON data out
-create a wait time for punchlines?
-figure out better object handling/infrastructure

Features:
-create new entries into users
-call entries based on user
-remove old key data


Root project is from: https://www.sitepoint.com/discord-bot-node-js/

## Requirements

- [Node.js](http://nodejs.org/)
- [Discord](https://discordapp.com/) account

## Installation Steps (if applicable)

1. Clone repo
2. Run `npm install`
3. Add Discord credentials in a `.env` file
3. Run `node index.js`
4. Interact with your Discord bot
