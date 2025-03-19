// complete the given function

function palindrome(str){
	let string=""
	for(i=str.length-1;i<=0;i--){
		string=string+str[i];
	}
	if(str===string){
		return true;
	}
	else{
		return false
	}

}
module.exports = palindrome
