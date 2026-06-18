// TEMPLATE LITERALS ==>

        // console.log("hello world!" +" " +"eyl");

      
        // console.log(`hello world!  ladflajsd;flajsdl;f`);


        // let firstName = "Muhammad";
        // let lastName = "Hasan"


        // function printUserFullName (firstName,lastName){
        //     let fullName = `${firstName} ${lastName}`
        //     console.log(fullName);

        // }


        // printUserFullName("Ashhad", "Khan")
        
        
        

// HOisting

// hoisting mai var variables | function keyword sai bany function top level pr ajaty hain.
// console.log(r);

// console.log(abcd);


// TEMPORAL DEAD ZONE   
// let abcd ;




// console.log("js is running -->");

// console.log(a);

// const a  = 12

//var r;   /// variable declare
// var r;   /// variable redeclare

// var a = "a"  // variable declare and initialize | assign

// re initialize | reassgin

// b = "abc";
// console.log(b);


// console.log(kuchBi);
// var kuchBi = "kuch bi"
// kuchBi = "extra kuch bi"
// console.log(kuchBi);



// mian differences --> let vs const vs var

// var jo hai declare or redeclare hosakta hai | re assign hosakta

// let jo hai vo declare hosakta hai redeclare nhi hosakta | re assign hota hai. 

// const jo hai vo declare and initialize hota hai. reassign nhi hota 

// const num = 12;

// num = 24

// let a;
// let a = "abc"
// console.log(a);

// a = "xyz"

// console.log(a);


// let jani = "maani"

// local scope | block scope | function scope 

// function abc (){
//     console.log(jani);
// }


// abc()

// console.log(foo);
// {
// var foo = "fooo"
// }


// console.log(foo);





function tryCatchHandler (){
    try {
    const a = "jani";

    // a = "mani"

if(a) throw "a is not defined"

} catch (error) {
return console.log(error);

    
}finally{
    console.log("janiii");
    
}
}

tryCatchHandler()