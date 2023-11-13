/*
Q.No.1
Write a program  that prompts the user to enter five numbers and stores
them in an array.Then output the sum of the numbers to the console.
*/
let arr=[];
for(let i=0;i<5;i++)
{
    let numbers=Number(prompt("Enter numbers"));
    arr.push(numbers);
}
console.log(arr);
let sum=0;
for(let i=0;i<arr.length;i++)
{
    sum=sum+arr[i];
}
console.log("sum of array:"+sum);
//Question No.2
/*write a function called findMax that takes in an array  of numbers as  a  parameter and returns the largest number in an
array
 */
const FindMax=(arr)=>{
    let max=0;
    for(let i=0;i<arr.length;i++)
    {
        console.log(arr[i]);
        if(arr[i]>max)
        {
            max=arr[i];
        }
    }
    return max;

} 
let arr=[2,3,4,7,8];
let max=FindMax(arr);
console.log("Max number:"+max);
//Question No.4
/* Write a program to take an array and print average of all elements of an array*/
let array=[2,6,7,8,4];
let avg=0,sum=0;
for(let i=0;i<array.length;i++)
{
    console.log(array[i]);
    sum=sum+array[i];
    avg=sum/array.length;
    
}
console.log("average:"+avg);
//Question No.5
/* Write a program to output those elements who are multiple of 3 and 5*/
let arr1=[3,5,15,20,18,21,27,25,10,9,30];
console.log("Divisible by 3 and 5")
for(let i=0;i<arr1.length;i++)
{
    if(arr1[i]%3==0 && arr1[i]%5==0)
    {
        console.log(arr1[i]);
    }
}
//Question No.3
/* Write a program that prompts the user to enter a sentence and stores each word in an array.Then,
output the length of the array to the console.
*/
let sentence=prompt("Enter a sentence");
const wordsarray=sentence.split('');
console.log("length of the array:"+wordsarray.length);

