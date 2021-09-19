//1
const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];

function modifiedFood() {
    console.log(foods.slice(1,4));
    /*The slice() method returns selected elements in an array, as a new array.
slice() selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.
slice() does not change the original array.
*/
}
 modifiedFood() ;

 //2
 const foods1 = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
 //Expected output: [pizza, burger, noodles, icecream, fingerShips, donuts, springRoll];
foods.splice(2,0,'noodles','icecream');
/*splice() method adds and/or removes array elements.
splice() overwrites the original array.*/
console.log(foods);

//3
const numberArray = [12,324,213,4,2,3,45,4234];

// const numberArray = [12,324,213,4,2,3,45,4234];
let isEven = numberArray.filter(items => items%2 == 0);
console.log(isEven);


//4

// 5
let isEven = numberArray.filter(item => item%2==0);
console.log(isEven);

//6
/*
map() method creates a new array with the results of calling a function for every array element.
The map() method calls the provided function once for each element in an array, in order.
map() does not execute the function for empty elements.
map() does not change the original array.

*/
const myArray = [11, 34, 20, 5, 53, 16];
function findSquareOfNumbers(myArray)
{
    let squares_of_no=myArray.map(function(item)
    {
        return item*item;
    });
    return squares_of_no;
}
console.log(findSquareOfNumbers(myArray));

//7
const myArray=[2, 3, 5, 10];
function multiply(myArray)
{
let multvalue=myArray.reduce(function(previousValue,currentValue)
{
    return previousValue*currentValue;
});
return multvalue;
}
console.log(multiply(myArray))
