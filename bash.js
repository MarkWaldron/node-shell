var commands = require('./command.js');

process.stdout.write('prompt > ');

process.stdin.on('data', function(data){
  var args = data.toString().split(' ');
  var cmd = args[0].trim();
  if (cmd !== '\n'){
    if(args.length > 1) {
      commands[cmd](args.slice(1));
    } else {
      commands[cmd]();
    }
  } else {
    process.stdout.write('prompt > ');
  }

});
