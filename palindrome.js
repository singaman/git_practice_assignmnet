// function that check str is palindrome or not
function check_palindrome( str )
{
	
	for( let i = 0 ; i < j/2 ;i++)
	{
	let x = str[i] ;//forward character
	let y = str[j-i];//backward character
	if( x != y)
	{
		// return false if string not match
		return false;
	}
	}
	/// return true if string is palindrome
	return true;
	
}

//function that print output is string is palindrome
function is_palindrome( str )
{
	// variable that is true if string is palindrome
	let ans = check_palindrome(str);
	//condition checking ans is true or not
	
	{
	console.log("passed string is palindrome ");
	}
	else
	{
	console.log("passed string not a palindrome");
	}
}
// test variable
let test = "racecar";
is_palindrome(test);

