//for of 

// const arr =[1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
    
    
// }

// const greetings = "hello world"
// for (const greet of greetings) {
//     console.log(`each char is ${greet}`);
    
    
// }

//maps

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "united states of america")
// map.set('NEP', "nepal")

// //console.log(map);
// for (const [key, value] of map) {
//     console.log(key, ":-" ,value);
    
// }
//const myNums=[1,2,3,4,5,6,6]
//const newNums =[]
// myNums.forEach( (num) => {

//     if(num>4){
//         newNums.push(num)
//     }
    
// }
// )
// const newNums = myNums.filter((num)=>{
//     return num>4;
// })
// console.log(newNums);

const myObject ={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}
for (const key in myObject) {
    console.log(`${key} sortcut is for ${myObject[key]}`);
}


const programming = ["js","rb","py","java","cpp"]
for (const key in programming) {
   console.log(programming[key]);
   
}
