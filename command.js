var fs = require('fs');

module.exports = {
  pwd: function() {
    process.stdout.write(__dirname);
    process.stdout.write("\nprompt > ");
  },
  date: function() {
    process.stdout.write(Date().toString());
    process.stdout.write("\nprompt > ");
  },
  ls: function() {
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      })
      process.stdout.write("\nprompt > ");
    });
  }


}
