//writer & trainee : Mohamed Tarek Mohamed 
//date : 31/12/2015
// these lines is breif of Java Script 
>>> means out put 
** example 
!! note
$$ new Object to learn 

/*======================================*/


// this is a single comment 
/* this long comments */

//======================================

$$ JavaScript has seven data types which are Undefined
 [ Null, Boolean, String, Symbol, Number, and Object]

  **For example:
   the Number data type represents numbers.
   Boolean is true or false 
//=======================================
$$ Declare JavaScript Variables 
	**In computer science, the placeholder where data
	 is stored for further use is known as a variable.

	** These variables are no different from 
	the x and y variables you use in Maths.
	 var keyword to create a variable called myName.
	 **example : 
	 var myName = "Mohamed Tarek" ; 
	 **example : 
	  var num = 9 ; 
	** example :
	var a;
	var b;
	var c;

	// Do not change code below this line
	a = 5 ;
	b = 10 ;
	c = "I am a" ;
	a = a + 1;
	b = b + 5;
	c = c + " String!";

>>> a = 6 , b = 15 , c = 'I am a String!'

!! In JavaScript all variables and 
	function names are case sensitive. 
	MYVAR is not the same as MyVar nor myvar.
!! We can add + , or multiply * , .... etc 
	numerical operations like Maths . 
	
	**example
	 myvar = 8 + 5 ;  >>> 13 
	 	 myvar = 8 * 5 ;  >>> 40 
	 	 	 myvar = 10 / 5 ;  >>> 2
	 	 	 	 myvar = 8 - 5 ;  >>> 3

!! myvar = myvar + 1  is equal myvar++ 
	**example :
	var MyVar = 5 ; 
	MyVar = MyVar + 1 : >>> 6
	MyVar++ :              >>> 6

!! myvar = myvar - 1  is equal myvar--
!! we can store floating numbers also in var 
	** example :
	var myDecimal = 22.4 ; 
!! we can multiply floating 
	** example :
	var num = 2.0 * 2.5 ;  >>> 5.0
!! we can also divide
	** example :
	var num = 4.4 / 2.2 ;  >>> 2.2

$$ The remainder operator % gives 
the remainder of the division of two numbers .
	**example :
	17 % 2 = 1 (17 is Odd)
	48 % 2 = 0 (48 is Even)

!! 5 % 2 = 1 because
	Math.floor(5 / 2) = 2 (Quotient)
	2 * 2 = 4
	5 - 4 = 1 (Remainder)

!! In mathematics:
	 a number can be checked even or odd
	  by checking the remainder of 
	  the division of the number by 2.
	  ** example :
	    17 % 2 = 1 (17 is Odd)
		48 % 2 = 0 (48 is Even)

$$Assignment with Plus Equals
myVar = myVar + 5;  Equal to  myvar += 5 ; 
!!also Minus 
 myVar = myVar - 5; equal to   myVar -= 5;
!! also times operator * 
myVar = myVar * 5;  equal to   myVar *= 5;
!! also deviding operator / 
myVar = myVar / 5;   equal to myVar /= 5;

//==================================================
$$ Declare String Variables 
	**example :
	var myFirstName = 'Mohamed';
	var myLastName = 'Tarek'
//===================================================

$$ Escaping Literal Quotes in Strings :
var myStr = "I am a \"double quoted \" string inside \"double quotes \" "  ; 
>>> "I am a "double quoted" string inside "double quotes"" 

$$ Escape Sequences in Strings
	 
/*	 \'  	single quote
	 \"  	double quote
	 \\		back slash 
	 \n 	new line
	 \r 	carriage return 
	 \t 	tab
	 \b 	backspace
	 \f 	form feed

*/
//===================================
$$ Appending Variables to Strings ::
you can add a new string to another last one >>
**example
var str = "My name is Mohamed "
var str2 = "Tarek"
str2+=str  
 str2 >>> "My name is Mohamed Tarek"

!! you can find length of  string by writing 
	(stringName.length)

//===================================================
$$ if you have a string like "Hello "
i wanna print the first string by using [num_of_string]
var name = "Mohamed "
name[0]  >>> 'M'
name[1]  >>> 'o'
//
!! you can't' change single string in the sentence 
this is error >>> name[0]='A'
you cant cahnge M but you can channge all the string . 

//====================================================
$$ Arrays
var myArray = ["Hello" , 2016 , ["Happy New Year", 1 , january]] ; 
>>> out myArray  Hello , 2016 , Happy New Year , 1 , january 
if you wanna access any value in arrar it is the same as string manipulation . 

!! Arrays are mutables unlike strings . 
mutable >> that you can change any word or part inside array . 
>>> myArray[2]= 2015 ; 

	**example : 
	var arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [[10,11,12], 13, 14]];

		>>>arr[0]; // equals [1,2,3]
		>>>arr[1][2]; // equals 6
		>>>arr[3][0][1]; // equals 11
above example called multi array 

$$to append or adding any value we can use >>> Array_name.push() 
like >> ** example : 
var myArray = [1,"hello"] ;
myArray.push(["MOhamed", 2 ]) ;
>>> myArray = [1 , "hello" , ["MOhamed" , 2]] 

$$ my_arry.pop() >> to pop last entry in new variable . 
!! pop() always removes the last element of an array  

$$ .shift() comes in.
 It works just like .pop(),
  except it removes the first element instead of the last.


$$ .unshift() works exactly like .push(),
 but instead of adding the element at the end of the array,
  unshift() adds the element at the beginning of the array.

>>>>>>>>>>>>> see this example <<<<<<<<<<<<<<<<<  

var my_array = ["Hello",5] ;
my_array.push(["new " , 7 ]) ;  >>> my_array = ["Hello",5 , ["new", 7]]
my_array.unshift("Mohamed") ;   >>> my_array = ["Mohamed" ,5 , ["new" , 7]]
my_array.pop() ; >>> my_array = ["Mohamed" ,5]
my_array.shift(): >>> my_array =[5]

>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

.shift() >> like but opposite<< .pop()  
.unshift() >> like  but opposite<< .push()

 /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<*/
 $$ function 
 function ourFunction() {
  console.log("Heyya, World");  // print word 

}


ourFunction(); //invoking the function
!! you can passe any arguments into fuction which called parameter : 
	**example :
			// Example
		function ourFunction(a, b) {
		  console.log(a - b);
		}
		ourFunction(10, 5); // Outputs 5

		function myFunction(a,b){
		  console.log(a+b);
		  
		}
		myFunction(2,3); 
	>>> 5 
//====================================
!!Variables which are used without the var keyword are automatically created in the global scope.
!!It is possible to have both local and global variables with the same name.
  When you do this, the local variable takes precedence over the global variable.
  //===========================================

  $$ if condition >> 
  function my_fun(test){
  	if(test>5){
  		return "Yes";
  	}
  	return "No";

  }

some definations >>>
		   1   ==  1        // true
		  "1"  ==  1        // true
		   1   == '1'       // true
		   0   == false     // true
		   0   == null      // false
		   0   == undefined // false
		 null  == undefined // true


!!important note >>> strict (===) equality tests both the type and value of the compared elements.
		3 === 3   // true
		3 === '3' // false

$$ != operator >>>>

		1 != 2      // true
		1 != "1"    // false
		1 != '1'    // false
		1 != true   // false
		0 != false  // false				 

$$ >    operator >>>
		 5 > 3   // true
		 7 > '3' // true
		 2 > 3   // false
		'1' > 9  // false
$$ all operations 
                    =     equal value
					==    equal to type
					<     less than
					>      greater than 
					!=     not equal type 
					===    equal type and value
					!==    not equal type and value
					<=     less than or equal 
					>=     greater thab or equal 
					&&		logical and >> true or false 

//====================================================
example ** : of else and else if 


if (num > 15) {
  return "Bigger then 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}

//==================================
		If you have many options to choose from, 
		use a switch statement. A switch statement 
		tests a value and can have many case statements 
		which defines various possible values.
		Statements are executed from the first 
		matched case value until a break is encountered.

	**example :
				switch (num) {
			  case value1:
			    statement1;
			    break;
			  case value2:
			    statement2;
			    break;
			...
			  case valueN:
			    statementN;
			    break;
			}
اfunction myTest(val) {
  var answer = "";
  // Only change code below this line
  switch(val){
    case 1 : 
      answer = "alpha";
      break ;
    case 2:
      answer = "beta";
      break ;
    case 3 :
      answer = "gamma";
      break ;
    case 4 :
      answer = "delta";
      break ;
  
      
  }
  
  
  // Only change code above this line  
  return answer;  
}

// Change this value to test
myTest(1);
>>> alpha 

!! default works here like else in if conditions 
switch (num) {
  case value1:
    statement1
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
}


function myTest(val) {
  var answer = "";
  // Only change code below this line
  switch (val){
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break ; 
    case 4 :
    case 5 :
    case 6 :
      answer = "Mid";
      break ; 
    case 7 :
    case 8 :
    case 9 :
      answer = "High";
      break ;
  }
  
  
  // Only change code above this line  
  return answer;  
}

!! if we use following cases like above we make a merging 
between cases we can say case 1 or 2 or 3 
return answer 

//===================================
comparasion *** 
a , b = 5 ;

function isEqual(a,b) {
  if(a === b) {
    return true;
  } else {
    return false;
  }
} 

>>> true
a , b = 5 ;
function isEqual(a,b) {
  return a === b;
}  
>>> true

!! When a return statement is reached,
 the execution of the current function stops 
 and control returns to the calling location.
 		**example :
		 		function myFun() {
		  console.log("Hello");
		  return "World";
		  console.log("byebye")
		}
		myFun();
		>>> Hello 
"byebye" is never output,
 because the function exits at the return statement.
 //============================================================================

 
 !! Objects  
		 var cat = {
		  "name": "Whiskers",
		  "legs": 4,
		  "tails": 1,
		  "enemies": ["Water", "Dogs"]
		};		

!!access any value >> 
var myObj = {
  prop1: "val1",
  prop2: "val2"
};
myObj.prop1; // val1
myObj.prop2; // val2

!! or we can use [] if property names have spaces into them 
var myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock"
};
myObj["Space Name"]; // Kirk
myObj['More Space']; // Spock

!! we have know about objects properities 
*** ourDog.name = "Happy Camper"; 

this is the way to manipulation .

or 

*** ourDog["name"] = "Happy Camper";

if you want to add anew properity and value like last instructions . 
*** ourDog["name"] = "Happy Camper"; 
// add new property called name to object ourDog with value "Happy Camper"
*** ourDog.name = "Happy Camper"; 


if we wanna delet any  property . 
delete myDog.tails ; // delet property which called tails in myDog object


//==========================================
if we need to find if the property is existed inside the object or not : 
we use >>> object.hasOwnProperty("property")




// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty([checkProp])){
    return myObj[checkProp];
  }
  
  return "Not Found";
}

// Test your code by modifying these values
checkObj("gift");


>>> pony 

//=====================================

$$ JavaScript Object Notation or JSON uses the format 
of JavaScript Objects to store data. 
JSON is flexible because it allows 
for Data Structures with arbitrary 
combinations of strings, numbers, booleans, arrays, and objects.

		** example
				var ourMusic = [
				  {
				    "artist": "Daft Punk",
				    "title": "Homework",
				    "release_year": 1997,
				    "formats": [ 
				      "CD", 
				      "Cassette", 
				      "LP" ],
				    "gold": true
				  }
				];


!! to access any value or specific object 

example *** 

				var ourStorage = {
				  "desk": {
				    "drawer": "stapler"
				  },
				  "cabinet": {
				    "top drawer": { 
				      "folder1": "a file",
				      "folder2": "secrets"
				    },
				    "bottom drawer": "soda"
				  }
				}
				ourStorage.cabinet["top drawer"].folder2;  // "secrets"
				ourStorage.desk.drawer; // "stapler"

example** to show tou ow to use arrays and objects 

// Setup
						var myPlants = [
						  { 
						    type: "flowers",
						    list: [
						      "rose",
						      "tulip",
						      "dandelion"
						    ]
						  },
						  {
						    type: "trees",
						    list: [
						      "fir",
						      "pine",
						      "birch"
						    ]
						  }  
						];

						// Only change code below this line

						var secondTree =myPlants[1].list[1]  ; // Change this line	
						>>> secondTree = pine 

//==================================================================
looping in JavaScript >>>> 
if (initialization ; timer ; step ){ 
< Block >
}						
		
while(test){

	< Block >
}

//====================================================
Math.random();  >>>>> it gives random numbers  >> 0.86666666 
Math.floor(Math.random()*10); >> 8 
 Math.floor((Math.random()*100 )+ 1 ); >> 87 

 //==========================================================

 $$ Regular expressions are used to find 
 certain words or patterns inside of strings.
 just /the/gi 

 ** For example, 
 if we wanted to find the word (the) 
 	in the string The dog chased the cat,
 	 we could use the following regular expression

 	 : /the/gi
//====================================
Regular Expressions 
  / < ex>  /g  

   		\s   space
   		\r   the carriage return
   		\d+   numbers 
   		\t   tab
   		\f 	 the form feed

   		\S  find what else than wight spaces 


//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$             $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$ # ########  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$ #         # $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$ #         # $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$ #         # $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$ #         # $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$ # ####### # $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$ #         # $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$ # $$$$$$$ # $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$ # $$$$$$$ # $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$ # $$$$$$$ # $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$   $$$$$$$   $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

$$ Construct JavaScript Objects with Functions
you can construct new object by using constructor 
		example** 

var MotorBike = function() {
  this.wheels = 2 ;
  this.engines = 1 ;
  this.seats = 2 ;

};

>>> {"wheels":2 , "engines":1 , "seats":2}


 we can add parameters to our constructor. We do this like the following example:

var Car = function(wheels, seats, engines) {

  this.wheels = wheels;

  this.seats = seats;

  this.engines = engines;

};

>>>>>  imprtant >>>>>   var myCar = new Car(6, 3, 1);

This code will create an object that uses the arguments we passed in and looks like:

{

  wheels: 6,

  seats: 3,

  engines: 1

}

***example

var Bike = function() {

  // Only change code below this line.
  var gear =0  ; 

  
  
  this.setGear=function(change){
    return gear += change ;
    
  } ;
  
    this.getGear=function(){
    return gear ;
    
  } ;



  // Only change code above this line.
};

var myCar = new Car();

var myBike = new Bike();
//=======================================================

$$Iterate over Arrays with map
if we have an array 
	var myArray = [1,2,3,4,5];
myArray.map(function(val){

	return val + 1 ; 
})

>>> 2,3,4,5,6 
we have modified all values in array by iterating through each index . 

array.reduce(function(previous_value , current_value){

	return  < Block>
}) ; 

!!! new_arr=array.concat(arry2)
array = [1,2,3]      ; 
arry2=[4,5,6]
>>> new_arr = [1,2,3,4,5,6] 


$$ arry.filter(function(val){
	return any value we want to filter it ;
});

** example 
array = array.filter(function(val) {

  return val !== 5;

});

>>> The following code is an example of using
 filter to remove array elements that are equal to five:

 !! note  >>> Any array element for which the callback 
 returns true will be kept and 
 elements that return false will be filtered out.


var oldArray = [1,2,3,4,5,6,7,8,9,10];
var newArray = [];

// Only change code below this line.

newArray = oldArray.filter(function(val){
  return val <= 5 ;
  
});

>>> 1,2,3,4,5 

filter to remove all elements from oldArray that are greater than 5.
//=================================

$$ sort can be passed a compare function as a callback. 
If no compare function is passed in it will convert the values 
to strings and sort alphabetically.

example** 
		var array = [1, 12, 21, 2];

		// Only change code below this line.

		array.sort(function(a,b){
		  return b -a ;
		});

>>> 21,12,2,1 


!! You can use the reverse method to reverse the elements of an array.

var myArray = [1, 2, 3]; myArray.reverse();

>>> returns [3, 2, 1]

//===========================================
$$	You can use the split method to split a string into an array.
var string = "Split me into an array";
var array = [];

// Only change code below this line.

array = string.split(' ');

>>> Split  ,  me , into , an , array 
//==================================
we can use arr.join to convent arr to string 
delimated with any string or num or space .

var joinMe = ["Split","me","into","an","array"];
var joinedString = '';

// Only change code below this line.

joinedString = joinMe.join(' ');

>>> Split me into an array 









///////////////////////////////////////////////////////////
function get_input(n) {
    var inputs = [];
    while (inputs.length < n) {
        var input = prompt("Enter pos (x,y): ");
        if (input.match(/^\(\d+,\d+\)$/) {
            var arr = input.substring(1, input.length-1).split(',').map(function(a) { return parseInt(a); });
            inputs.push(arr);
        }
    }
    return inputs;
}



It checks if the line matches the regex.
The regex says:
^ : start of the line
( : start of brackets
\d+ : one or more digits (used for x)
, : comma
\d+ : one or more digits (used for y)
) : close of brackets
$ : end of line

 