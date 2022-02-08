module.exports = {

  
  name: '!gettime',
  description: 'returns a time stamp in hours and minutes in GMT 24 hour format',
  execute(msg, args) {
    console.log(updateTimestamp()[0]);
    msg.channel.send(updateTimestamp()[0]);
  },

  // name: '!getcron',
  // description: 'returns a cron expression',
  // execute(msg, args) {
  //   console.log(updateTimestamp()[1]);
  //   msg.channel.send(updateTimestamp()[1]);
  // }
};

function updateTimestamp(){
var currentDate = new Date()
var noSeconds = currentDate.getSeconds()
var noMinutes = currentDate.getMinutes()
var noHours = currentDate.getHours()
var GMTHours = (noHours+5) //this code only works in EST, guess I better not move lul
let current_time = GMTHours + ':' + noMinutes + ' GMT'
var month = currentDate.getUTCMonth() + 1; //months from 1-12
var day = currentDate.getUTCDate();
var year = currentDate.getUTCFullYear();
let current_cron_expression = `(${noSeconds}, ${noMinutes}, ${GMTHours}, ${day}, ${month}, ${year}) (sec,min,hour,day,month,yr) all GMT. Remember AWS ignores seconds`

var time_array = [current_time,current_cron_expression ]
return time_array
}