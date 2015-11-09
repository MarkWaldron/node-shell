var fs = require('fs');

module.exports = {
  pwd: function(file) {
    process.stdout.write(__dirname);
    process.stdout.write("\nprompt > ");
  },
  date: function(file) {
    process.stdout.write(Date().toString());
    process.stdout.write("\nprompt > ");
  },
  ls: function(file) {
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      })
      process.stdout.write("\nprompt > ");
    });
  },
  echo: function(file){
    process.stdout.write(file.join(" "));
    process.stdout.write("\nprompt > ");
  }
}
