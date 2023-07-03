// complete the given function
let input=document.getElementsByTagName("input");
let str=input[0].value;
function palindrome(str){
for(let i=0;i<str.length;i++){
	let k=i;
	let m=str.length-1;
	if(str.charAt(k)==str.charAt(m)){
		k++;
		m--;
	}
	else{
		return false;
	}
}
	return true;
}
module.exports = palindrome
