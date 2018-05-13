function encrypt(input, sh)
{
	counter = 1;
	newStr = "";


	for (var i = 0; i < input.length; i++) {
		var asciiCode = input.charCodeAt(i);
		

		asciiCode += sh;
		if (asciiCode > 126) {
			asciiCode = asciiCode - 127;
			asciiCode += 32;
		} 
			
		newStr += String.fromCharCode(asciiCode);
	}
	return newStr
}

console.log(encrypt('Hello world!',12));
