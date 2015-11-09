var fs = require('fs');
var request = require('request');

module.exports = {

  pwd: function(done) {
    done(__dirname);
  },

  date: function(done) {
    done(Date().toString());
  },

  ls: function(done) {
    var result = '';
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        result += file.toString() + '\n';
      })
      done(result);
    });
  },

  echo: function(file, done){
    done(file.join(" "));
  },

  cat: function(file, done){
    var filePath = './' + file[0];
    fs.readFile(filePath, 'utf8', function(err, data){
      if(err) throw err;
      done(data);
    });
  },

  head: function(file, done){
    var filePath = './' + file[0];
    fs.readFile(filePath, 'utf8', function(err, data){
      if(err) throw err;
      var lines = data.split('\n');
      if(lines.length > 5){
        lines = lines.slice(0, 5).join('\n');
      } else {
        lines = lines.join('\n')
      }
      done(lines);
    })
  },

  tail: function(file, done){
    var filePath = './' + file[0];
    fs.readFile(filePath, 'utf8', function(err, data){
      if(err) throw err;
      var lines = data.split('\n');
      if(lines.length > 5){
        lines = lines.slice(lines.length-5, lines.length).join('\n');
      } else {
        lines = lines.join('\n');
      }
      done(lines);
    })
  },

  sort: function(file, done){
    var filePath = './' + file[0];
    fs.readFile(filePath, 'utf8', function(err, data){
      if(err) throw err;
      var lines = data.split('\n');
      lines.sort();
      lines = lines.join('\n');
      done(lines)
    })
  },

  wc: function(file, done){
    var filePath = './' + file[0];
    fs.readFile(filePath, 'utf8', function(err, data){
      if(err) throw err;
      var lines = data.split('\n');
      done(lines.length.toString());
    })
  },

  uniq: function(file, done){
    var filePath = './' + file[0];
    fs.readFile(filePath, 'utf8', function(err, data){
      if(err) throw err;
      var lines = data.split('\n');
      lines = Array.from(new Set(lines));
      lines = lines.join('\n');
      done(lines);
    });
  },

  curl: function(url, done){
    request(url[0], function(err, response, body){
      if (err) throw err;
      var result = '';
      if(!err && response.statusCode == 200){
        result += body;
      }
      done(result);
    })
  }
}
