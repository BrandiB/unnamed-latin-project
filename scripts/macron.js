function latinIME(theElement) {
	var theString = document.getElementById(theElement).value;
	var newString = '';
	if (theString.length >= 2 && theString.charAt(theString.length-2) == "-") {
		switch(theString.charAt(theString.length-1)) {
			case "a":
				newString = 'ā';
				break;
			case "e":
				newString = 'ē';
				break;
			case "i":
				newString = 'ī';
				break;
			case "o":
				newString = 'ō';
				break;
			case "u":
				newString = 'ū';
				break;
			case "A":
				newString = 'Ā';
				break;
			case "E":
				newString = 'Ē';
				break;
			case "I":
				newString = 'Ī';
				break;
			case "O":
				newString = 'Ō';
				break;
			case "U":
				newString = 'Ū';
				break;
			default:
				newString = theString.slice(theString.length-2,theString.length);
		}
		if (theString.length == 2) {
			document.getElementById(theElement).value = newString;
		} else {
			document.getElementById(theElement).value = theString.slice(0,theString.length-2) + newString;
		}			
	}	
}