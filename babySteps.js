var processArray = process.argv;

	function processSum(processArray) {
		var sum = 0;
		for(i = 2; i < process.argv.length; i++) {
			sum += Number(process.argv[i]);
		}
		console.log(sum);
	}

	processSum(processArray);