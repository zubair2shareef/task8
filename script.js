
//----------------call----
var obj={gpa:5};

var getStudent=function(name){
    console.log(`studentname =${name},gpa=${this.gpa}`)
}
getStudent.call(obj,'zubair')


//==================apply--------
var obj2={name:'zubair'};
var getmarksOfStudent=function(a,b,c,d){
    console.log(`name=${this.name} marks=${a},${b},${c},${d}`)
}
var marksarr=[33,22,44,11];
getmarksOfStudent.apply(obj2,marksarr)

//-------------------------blind-----

var obj3={name:'zubair'};
var getmarksOfStudent2=function(a,b,c,d){
    console.log(`name=${this.name} marks=${a},${b},${c},${d}`)
}

var returnobj=getmarksOfStudent2.bind(obj2);

returnobj(1,2,3,4)


// -----------------problem---------------


var student ={age:20}

function printAge(){
    console.log(this.age);
}
var ageReturn=printAge.bind(student);

ageReturn();


// ----------------curring-----------
//using bind
let multiply=function(x,y){
    console.log (x*y);
}
let mutiplyBytwo=multiply.bind(this,2);
mutiplyBytwo(3)


//using closure

function multi(x){
    return function(y){
        console.log(x*y)
    }
}
var multifucntio=multi(3);
multifucntio(8);