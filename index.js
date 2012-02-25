#!/usr/bin/env node

var fs = require('fs');
var program = require('commander');
var exec = require('child_process').exec;

program
  .version('0.0.1')
  .option('-f, --file <path>', 'FLV file path')
  .option('-o, --out [path]', 'Output directory')
  .parse(process.argv);

if (!program.file) { console.log('FLV file path required. -h for help'); }
else {
	program.out = program.out || process.cwd();
	convert(program.file, program.out);
}

var in_destination_dir = false;
function convert(source_file, destination_dir) {
	if (!in_destination_dir) {
		try {
			in_destination_dir = true;
			process.chdir(destination_dir);			
		}
		catch (err) { console.log(err); }
	}
	var destination_file = source_file.split('/').slice(-1)[0].replace('.flv', '.mp3');
	var ffmpeg = 'ffmpeg -y -i '+ source_file +' -f mp3 -vn -acodec copy ' + destination_file;
    var child = exec(ffmpeg, function(err, stdout, stderr) {
        if (err) throw err;
        else console.log(source_file.split('/').slice(-1)[0] +' converted to '+ destination_file);
    });
}
