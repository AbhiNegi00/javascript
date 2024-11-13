// const coding =["js","ruby","java","python","cpp"]

// const values = coding.forEach((item)=>{

// console.log(item);

// return item

// })

// console.log(values);

//when we start a scope with curly braces we have to
//write the return keywords to return the values

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => {
//   return num > 4;
// });
const newNums = []

myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})


console.log(newNums);

