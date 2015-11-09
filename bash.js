var commands = require('./command.js');

process.stdout.write('prompt > ');

process.stdin.on('data', function(data){
  var cmd = data.toString().trim();
  commands[cmd]();

});
