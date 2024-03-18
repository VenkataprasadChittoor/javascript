
var myArray =[1,2,3,4,5,6,7];
var secondLargest = myArray.sort(function(a,b)
{ 
    return a-b
})
    [myArray.length-2]
console.log("the Second largest value is:"+secondLargest);
