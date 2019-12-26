// //For
// let todoArr=[
//   "Play Football",
//   "Coding",
//   "Study TypeScript"
// ];

// // let length=todoArr.length;
// // for(let i=0;i<length;i++){
// //   console.log(todoArr[i]);
// // }

// // for(let index in todoArr){
// //   console.log(index+": "+todoArr[index]);
// // };

// // for(index of todoArr){
// //   console.log(index);
// // };

// let todoObj={
//   id: 169,
//   name:"Play football",
//   status: false
// };
// for(let index in todoObj){
//   console.log(index+": "+todoObj[index])
// }

// //Sử dụng Spread
// let courseWeb=["PHP","Wordpress","HTML"];
// let couseMobile=["Android","IOS"];
// let courseDoLearn=["NodeJS","JS",...courseWeb,"Swift",...couseMobile];
// console.log(courseDoLearn);

// //Sử dụng Destructuring
// // let Mang=[
// //   123,
// //   "ES6",
// //   false
// // ];
// // let[id,name,free]=Mang;
// // console.log(id+" - "+name+" - "+free);

// let objCourse={
//   id:456,
//   name:"ES6",
//   free:true,
//   createdBy:"User"
// };
// let{id, name, free, createdBy="admin"}=objCourse;
// console.log(objCourse);

// //Default params
// function showInfo(name="ES6", price=20){
//   return `Course name: <b>${name}</b>, price: <b>${price}</b>`;
// };
// var dom=document.getElementById("mContent");
// dom.style.color="#0174DF";
// dom.innerHTML=showInfo("TypeScript",50);

// //Rest params
// function caculate(action,...values){
//   let result =0;
//   switch(action){
//     case '+':
//       for(let value of values) result+=value;
//       break;
//     case '-':
//       for(let value of values) result-=value;
//       result = result + values[0]*2;
//       break;
//   }
//   return result;
// };
// console.log(caculate("-",8,3,3,1,2));

// //Arrow Functions 1
// function fun01(name, age){
//   return `func01 My name is ${name}, ${age} years old`;
// };

// var function02=function(name, age){
//   return `func02 My name is ${name}, ${age} years old`;
// };

// function fun03=(name, age)=>{
//   return `func03 My name is ${name}, ${age} years old`;
// };

// function fun04=(name, age)=>
//   `func04 My name is ${name}, ${age} years old`;
//   // return `func01 My name is ${name}, ${age} years old`;

// function fun05=name=>{
//   return `func05 My name is ${name}`;
// }

// function fun06=()=>{
//   return `func05 My name is`;
// }

// console.log(fun06=());
  
// //Arrow Functions 2

// let course=["android","java","php","angular"];

// console.log(
//   course.map(course=>{
//     return course.toUpperCase();
//   })
// );

// let scores=[9,2,8,4,7,3,1,5,6];
// scores.sort(
//  (x,y) => x > y ? 1 : -1
// );
// // const newSort=scores.sort();
// console.log(scores);

// // Từ khóa this

// let student={
//   name: "John",
//   courses: ['Android','Java','PHP'],
//   showInfo: function(){
//     this.courses.forEach(function(course){
//       console.log(`John study: ${course}`);
//     });
//   }
// };
// student.showInfo();

// let student={
//   name: "John",
//   courses: ['Android','Java','PHP'],
//   showInfo: function(){
//     var _this=this;
//     this.courses.forEach(function(course){
//       console.log(`${_this.name} study: ${course}`);
//     });
//   }
// };
// student.showInfo();

// let student={
//   name: "Lionel Messi",
//   courses: ['Android','Java','PHP'],
//   showInfo: function(){
//     this.courses.forEach(function(course){
//       console.log(`${this.name} study: ${course}`);
//     }.bind(this));
//   }
// };
// student.showInfo();

// let student={
//   name: "Cristiano Ronaldo",
//   courses: ['Android','Java','PHP'],
//   showInfo: function(){
//     this.courses.forEach((course)=>{
//       console.log(`${this.name} study: ${course}`);
//     });
//   }
// };

// let student={
//   name: "Luis Suares",
//   courses: ['Android','Java','PHP'],
//   showInfo: function(){
//     this.courses.forEach(course=>
//       console.log(`${this.name} study: ${course}`)
//     );
//   }
// };
// student.showInfo();

//Tìm hiểu Enhanced

//Property value shorthand
// function getCourse(name,price,free){
//   return{
//     name,
//     price,
//     free
//   }
// };
// console.log(getCourse("ES6",20,false));

//Method Property
// function getCourse(name,price,free){
//   return{
//     name,
//     price,
//     free,

//     showInfo1: function(){
//       console.log(`${name+" - "+price+" - "+free}`);
//     },

//     showInfo2(){
//       console.log(`${name+" - "+price+" - "+free}`);
//     },

//     showInfo3(delimiter=" - "){
//       console.log(`${name+delimiter+price+delimiter+free}`);
//     }
//   }
// };
// var myCourse=getCourse("ES6",20,false);
// myCourse.showInfo3(" ++++++ ");
// console.log(myCourse);

//Computed Property Names
// let beforeBootstrap="Support_Enable";
// let bootstrap={
//     [beforeBootstrap+"Chrome"]:true,
//     [beforeBootstrap+"FrieFox"]:true,
//     [beforeBootstrap+"IDE"]:false
// };
// console.log(bootstrap);

//Sử dụng Class
// class student{
//     constructor(code, name, age){
//         this.code=code;
//         this.name=name;
//         this.age=age;
//     }
//     getAge(){
//         let today=new Date();
//         let year=today.getFullYear();
//         return year-this.age;
//     }

//     showInfo(){
//         return this.code+" - "+this.name+" - "+this.getAge();
//     }
// };
// let studentObj=new student("SV01","Cường",1996);
// console.log(studentObj);
// console.log(studentObj.showInfo());

//Sử dụng Inheritance

// class Person{
//     constructor(name, code, age){
//         this.name=name;
//         this.code=code;
//         this.age=age;
//     }
//     getAge(){
//         let today=new Date();
//         let year=today.getFullYear();
//         return year-this.age;
//     }

//     showInfo(){
//         return this.name+" - "+this.code+" - "+this.getAge();
//     }
// };
// class Student extends Person{
//     constructor(name, code, age, score){
//         super(name, code, age);
//         this.score=score;
//     }
//     showInfo(){
//         // super.showInfo();
//         // console.log(" - "+this.score);
//         return this.name+" - "+this.code+" - "+this.getAge()+" - "+this.score;
//     }
// };
// let personObj= new Person("Cường","201713630",1996);
// console.log(personObj.showInfo());

// let studentObj=new Student("Bườm","201713631",1997,80);
// console.log(studentObj.showInfo());