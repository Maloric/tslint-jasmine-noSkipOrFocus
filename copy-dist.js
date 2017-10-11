var fs = require('fs');
var ncp = require('ncp').ncp;
var outputDir = './dist';

// create dist dir
if(!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// copy files to dist
ncp(     './tmp/src',      outputDir,                   logErrorAndExit);
copyFile('./README.md',    outputDir + '/README.md',    logErrorAndExit);
copyFile('./LICENSE',      outputDir + '/LICENSE',      logErrorAndExit);
copyFile('./package.json', outputDir + '/package.json', logErrorAndExit);

console.log('copy to dist complete!');

// function to copy a file
function copyFile(source, target, cb) {
  var cbCalled = false;

  var rd = fs.createReadStream(source);
  rd.on('error', function(err) {
    done(err);
  });
  var wr = fs.createWriteStream(target);
  wr.on('error', function(err) {
    done(err);
  });
  wr.on('close', function(ex) {
    done();
  });
  rd.pipe(wr);

  function done(err) {
    if (!cbCalled) {
      cb(err);
      cbCalled = true;
    }
  }
}

// callback for errors, exits with code 1
function logErrorAndExit(err) {
  if (err) {
    console.error(err);
    process.exit(1);
    return;
  }
}
