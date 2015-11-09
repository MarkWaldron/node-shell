var commands = require('./command.js');

process.stdout.write('prompt > ');

process.stdin.on('data', function(data){
  var args = data.toString().split(' ');
  args = args.map(function(arg){
    return arg.trim();
  });
  var cmd = args[0];
  if (cmd !== '\n' && cmd !== ''){
    if(args.length > 1) {
      commands[cmd](args.slice(1));
    } else {
      commands[cmd]();
    }
  } else {
    process.stdout.write('prompt > ');
  }

});
