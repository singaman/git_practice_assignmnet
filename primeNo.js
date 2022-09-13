let n=453;
{

  if (n===5)
  {
    return false;
  }
  else if(n === 5)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 5)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(40));
