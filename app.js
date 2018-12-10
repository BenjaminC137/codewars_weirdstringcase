function toWeirdCase(string){
	var wordsArray = string.split(" ");
	var weirdArray = [];
//	console.log(wordsArray);
//	var firstWord = wordsArray[0];
	for(var j = 0; j < wordsArray.length; j++){
		var result = "";
		for(var i = 0; i < wordsArray[j].length; i++){
			if(i % 2 == 0){
				result = result.concat(wordsArray[j][i].toUpperCase());
			}
			else{
				result = result.concat(wordsArray[j][i].toLowerCase())
			}
		}
		weirdArray.push(result);
		console.log(result);
	}
	var weirdString = weirdArray.toString();
	weirdString = weirdString.replace(/,/g, ' ');
	return weirdString;
}





//Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.
//
//The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').
//
//Examples:
//
//toWeirdCase( "String" );//=> returns "StRiNg"
//toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
//  toWeirdCase("Weird string case")

