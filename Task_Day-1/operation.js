
var add = function(x,y)
{
    try 
    {
        console.log(parseInt(x)+parseInt(y));
    } 
      
    catch (error) {
        return "Error: Invalid argument type";
      }
}
var sub = function(x,y)
{
    try
    {
        console.log(parseInt(x)-parseInt(y));  
      } 

    catch (error)
    {
        return "Error: Invalid argument type";
    }
}
var Multi = function(x,y)
{
    try {
        console.log(parseInt(x)*parseInt(y));    
      }
         catch (error) {
        return "Error: Invalid argument type";
      }
}

module.exports =
{
    add : add,
    sub: sub,
    Multi : Multi 
}