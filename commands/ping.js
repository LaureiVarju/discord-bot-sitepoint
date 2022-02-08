module.exports = {
  name: 'ok!',
  description: 'Ping!',
  execute(msg, args) {
    msg.reply('I believe you!');
    // msg.channel.send('pong');
  },
};
