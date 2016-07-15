var fs = require('fs');

var filePath = process.argv[2];

var buf = fs.readFileSync(filePath);

function newlines(buf) {
	var count = 0;
	for(i = 0; i < buf.length; i++) {
		if(buf[i] === '\n') {
			count++;
		}
	}
	console.log(count);
}

newlines(buf.toString().split(""));

// console.log(buf.toString().split(""));