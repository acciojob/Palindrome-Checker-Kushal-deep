// complete the given function

function palindrome(str){
// 	let string=""
// 	for(let i=str.length-1;i>=0;i--){
// 		string=string+str[i];
// 	}
// 	if(str===string){
// 		return true;
// 	}
// 	else{
// 		return false
// 	}

// }


	 const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Compare characters from the start and end moving towards the center
    let left = 0;
    let right = cleanedStr.length - 1;

    while (left < right) {
        if (cleanedStr[left] !== cleanedStr[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}
module.exports = palindrome
