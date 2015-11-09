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
  },

  cat: function(file){
    var filePath = './' + file[0];
    fs.readFile(filePath, 'utf8', function(err, data){
      if(err) throw err;
      process.stdout.write(data);
      process.stdout.write("\nprompt > ");
    });
  },

  head: function(file){
    var filePath = './' + file[0];
    fs.readFile(filePath, 'utf8', function(err, data){
      if(err) throw err;
      var lines = data.split('\n');
      if(lines.length > 5){
        lines = lines.slice(0, 5).join('\n');
        process.stdout.write(lines);
      } else {
        lines = lines.join('\n')
        process.stdout.write(lines);
      }
      process.stdout.write('\nprompt > ');
    })
  },

  tail: function(file){
    var filePath = './' + file[0];
    fs.readFile(filePath, 'utf8', function(err, data){
      if(err) throw err;
      var lines = data.split('\n');
      if(lines.length > 5){
        lines = lines.slice(lines.length-5, lines.length).join('\n');
        process.stdout.write(lines);
      } else {
        lines = lines.join('\n')
        process.stdout.write(lines);
      }
      process.stdout.write('\nprompt > ');
    })
  },

  sort: function(file){
    var filePath = './' + file[0];
    fs.readFile(filePath, 'utf8', function(err, data){
      if(err) throw err;
      var lines = data.split('\n');
      lines.sort();
      lines = lines.join('\n');
      process.stdout.write(lines);
      process.stdout.write('\nprompt > ');
    })
  },

  wc: function(file){
    var filePath = './' + file[0];
    fs.readFile(filePath, 'utf8', function(err, data){
      if(err) throw err;
      var lines = data.split('\n');
      process.stdout.write(lines.length.toString());
      process.stdout.write('\nprompt > ');
    })
  },

  uniq: function(file){
    var filePath = './' + file[0];
    fs.readFile(filePath, 'utf8', function(err, data){
      if(err) throw err;
      var lines = data.split('\n');
      lines = Array.from(new Set(lines));
      lines = lines.join('\n');
      process.stdout.write(lines);
      process.stdout.write('\nprompt > ');
    });
  }
}
