// const myArr = ["Abhishek"];
// console.log(myArr);


//console.log(Array.from("Abhishek"));


// const myArr = [1,2,3,4];

// console.log(myArr);


// const score1 = 100;
// const score2 = 200;
// const score3 = 300;

// console.log(Array.of(score1,score2,score3));


// let a = 300;
// if(true){
//     let a =10;
//     const b = 20;
 
//     var c= 30;
//     console.log( a);
    
// }

//console.log(a);
//console.log(b);
//console.log(c);
// function one(){
//     const username ="Abhishek"
//     function two(){
//         const website = "youtube"
//         console.log(username);
        
//     }
//     //console.log();
//     two()
// }

// one()


// if(true){
//     const username="Abhishek"
//     if(username === "Abhishek"){
//         console.log(username);
        
//     }
// }
//this
// const user={
//     username : "Abhishek",
//     price : 999,
//     welcome:function(){
//         console.log(`${this.username},welcome to this webiste`);
//      console.log(this);
        
        

//     }
// }


// user.welcome();
// user.username="Abhiiiiiii"
// user.welcome()

//arrow
//const = () =>{}

    const add=(num1, num2)=>{
        return num1+num2;
    }
//    console.log(add(3,4));
    
//IIFE=> function that can be executed immediately
//it is used to remove global scope pollution
//iofe donot know where to end so use ; to end 

(function chai(){
    //named iife
    console.log(`DB connected`);
    
})();

((name)=>{
    //simple iife
    console.log(`my name is ${name}`);
    
})('abhishek')