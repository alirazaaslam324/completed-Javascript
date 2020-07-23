//----------------------Chapter no 21 - 25 -----------------------//
//task no 1
$('#task1').click(function()
{
	var a = prompt("Enter the First Name");
	var b = prompt("Enter the Second Name");
	var Fullname = a + " " + b;
	alert(Fullname);
});

//task no 2
$('#task2').click(function()
{
	var a = prompt("Enter your Favorite Phone Model :");
	var b = a.length;
	alert("My Favorite phone is : " + a +"\n length of String is : " + b );
});

//task no 3
$('#task3').click(function()
{
	var a = prompt("Enter the string value");
	var b = prompt("Enter letter to find in String Index ");
	var c = a.indexOf(b);
	alert("String : " + a + "\n Index of '" + b + "' : "+ c);

});
//task no 4
$('#task4').click(function()
{
	var a = prompt("Enter the string value");
	var b = prompt("Enter letter to find in String Index ");
	var c = a.lastIndexOf(b);
	alert("String : " + a + "\n Last Index of '" + b + "' : "+ c);

});

//task no 5
$('#task5').click(function()
{
	var a = prompt("Enter the string value");
	var b = prompt("Enter letter to find in String Index no : ");
	var c = a.charAt(b);
	alert("String : " + a + "\n Character at index '" + b + "' : "+ c);

});

//task no 6
$('#task6').click(function()
{
	var a = prompt("Enter the First Name");
	var b = prompt("Enter the Second Name");
	var Fullname = a.concat(b);
	alert(Fullname);

});

//task no 7
$('#task7').click(function()
{
	var str = "Hyderabad";
  	var res = str.replace("Hyder", "Islam");  	
  	alert("City : " + str + "\n After replacement : " + res);

});

//task no 8
$('#task8').click(function()
{
		var message = "Ali and Sami are best friends. They play cricket and football together.";		 
  		var res = message.replace(/and/g, "&");  		
  		alert("String : " + message + "\n After replacement : " + res);

});

//task no 9
$('#task9').click(function()
{
		var a = "472";
		var b = parseInt(a);
		alert(a + "\n" + (typeof a) + "\n" + b + "\n" + (typeof b));

});

//task no 10
$('#task10').click(function()
{
		var a = prompt("Enter the string to convert Uppercase");
		var b =  a.toUpperCase();
		alert("User Input : "+ a + "\nUpper case : " + b);

});

//task no 11
$('#task11').click(function()
{
		var a = prompt("Enter the string to convert Title case");
		var b = a.charAt(0).toUpperCase() + a.slice(1);
		alert("User Input : " + a + "\n Title Case : " + b);

});

//task no 12
$('#task12').click(function()
{
	var num = 43.34;
	var b = num.toString();
	var res = b.replace(".", "");
	alert("Number : " + num + "\n Result : " + res);

});

//task no 13
$('#task13').click(function()
{
	var username = prompt("Enter your full name don't use any special Character");

	var b = String.fromCharCode(33);
	var d = String.fromCharCode(44);
	var e = String.fromCharCode(46);
	var f = String.fromCharCode(64);
	var c = username.match(b);
	var g = username.match(d);
	var h = username.match(e);
	var i = username.match(f);	
	 if (c==b)
	 {
	 	alert("Please Enter the valid username");
	 }
	 else if (g==d) 
	 {
	 	alert("Please Enter the valid username");
	 }
	 else if (h==e) 
	 {
	 	alert("Please Enter the valid username");
	 }
	 else if (i==f) 
	 {
	 	alert("Please Enter the valid username");
	 }
	 else
	 {
	 	alert("your username is valid");
	 }

});

//task no 14
$('#task14').click(function()
{
		var arr = ["cake","apple pie","cookie","“chips","patties"];
		var check = prompt("Welcome to ABC Bakery. what do you want to order sir/ma'am?").toLowerCase();

		if(check == arr[0] || check == arr[1] || check == arr[2] || check == arr[3] || check == arr[4])
		{
			alert(check + " is available at index "+ (arr.indexOf(check))+ " in our Bakery ");
		}
		else 
		{
			alert("we are sorry. " + check + " is not Available in our Bakery");
		}
});

//task no 15
$('#task15').click(function()
{
	var a = prompt("Enter the valid Password");
	var d = /(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{5,}/g;
	
	 if (isNaN(parseInt(a[0])) && a.match(d)) 
	{
		  alert("password is valid");
	}
	else
	{
	  alert("Entered password : " + a + "\n Password cannot begin with a number or any other \n Please enter a valid password");
	}	 
	
		
});

//task no 16
$('#task16').click(function()
{
	var a = "University of Karachi !";
	var b = a.split("");
	document.write(b);
		
});

//task no 17
$('#task17').click(function()
{
	var a = prompt("Enter the string value");	
	var c = a.slice(-1);
	alert("User input : " + a + "\n Last Character of input is : " + c);
		
});

//task no 18
$('#task18').click(function()
{
	var r = ("The quick brown fox jumps over the lazy dog").toLowerCase();
	var a = (r.match(/the/g)).length;
	alert("Text: " + r + "\n There are " + a + " occurrence(s) of 'the' ");
		
});



//----------------------Chapter no 26 - 30 -----------------------//


//task no 1
$('#task19').click(function()
{
	var a = parseFloat(prompt("Enter the positive enteger or float value"));
	var b = Math.round(a);
	var c = Math.floor(a);
	var d = Math.ceil(a);
	alert("Your Number : " + a + "\n round off value : " + b + "\n floor value : "+ c + "\n ceil value : " + d );
		
});

//task no 2
$('#task20').click(function()
{
	var a = parseFloat(prompt("Enter the negative enteger or float value"));
	var b = Math.round(a);
	var c = Math.floor(a);
	var d = Math.ceil(a);
	alert("Your Number : " + a + "\n round off value : " + b + "\n floor value : "+ c + "\n ceil value : " + d );
		
});

//task no 3
$('#task21').click(function()
{
	var a = parseFloat(prompt("Enter the value to check absolute value"));
	var b = Math.abs(a);
	alert("The absolute value of "+ a  + " is " + b);

		
});

//task no 4
$('#task22').click(function()
{	
	var b = Math.floor( Math.random() * 6 )+1;
	alert("random dice value : " + b);

		
});

//task no 5
$('#task23').click(function()
{	
	var b = Math.floor( Math.random() * 2 )+1;
	if (b == 2) 
	{
		alert(b + "\nrandom coin value : Head");
	}
	else
	{
		alert(b + "\nrandom coin value : Tails");	
	}
		
});

//task no 6
$('#task24').click(function()
{	
	var b = Math.floor( Math.random() * 100 )+1;
	alert("random number between 1 to 100 : " + b);
		
});

//task no 7
$('#task25').click(function()
{	
	var a = parseFloat(prompt("Enter your weight : e.g (50)"));
	alert(Math.round(a)+ "." + (Math.floor( Math.random() * 8)+1) + " kilograms");
		
});

//task no 8
$('#task26').click(function()
{	
	var a = parseFloat(prompt("Enter number between 1 to 10"));
	var b = Math.floor( Math.random() * 10 )+1;

	if (a == b ) 
	{
		alert("Congragulation!");
	}
	else
	{
		alert("try again !");
	}
	
		
});

//----------------------Chapter no 31- 34 -----------------------//

//task no 1
$('#task27').click(function()
{	
	var a = new Date();
	alert(a);
		
});

//task no 2
$('#task28').click(function()
{	
	var a = new Date();	
	var month = new Array();
	month[0] = "January";
	month[1] = "February";
	month[2] = "March";
	month[3] = "April";
	month[4] = "May";
	month[5] = "June";
	month[6] = "July";
	month[7] = "August";
	month[8] = "September";
	month[9] = "October";
	month[10] = "November";
	month[11] = "December";
	var n = month[a.getMonth()];	
	alert("Current month : "+n);
		
});

//task no 3
$('#task29').click(function()
{	
	var a = new Date();	
	var day = new Array();
	day[0] = "Sunday";
	day[1] = "Monday";
	day[2] = "Tuesday";
	day[3] = "Wednesday";
	day[4] = "Thursday";
	day[5] = "Friday";
	day[6] = "Saturday";

	var n = day[a.getDay()];	
	
	alert("Today is  : "+ n);
		
});

//task no 4
$('#task30').click(function()
{	
	var a = new Date();	
	var day = new Array();
	day[0] = "Sunday";
	day[1] = "Monday";
	day[2] = "Tuesday";
	day[3] = "Wednesday";
	day[4] = "Thursday";
	day[5] = "Friday";
	day[6] = "Saturday";

	var n = day[a.getDay()];	
	if (day[a.getDay()] == day[0] || day[a.getDay()] == day[6]) 
	{
		alert("It's fun day ");
	}
	else
	{
		alert("working day");
	}	
});

//task no 5
$('#task31').click(function()
{	
	var a = new Date();	
	var day = (a.getUTCDate())+1;

	if (day > 15) 
	{
		alert("Last days of the month");
	}
	else
	{
		alert("First fifteen days of the month");
	}
	
});

//task no 6
$('#task32').click(function()
{	

	var d = new Date();
  	var n = d.getTime();
  	var c = n / d.getUTCMinutes();
  	
	alert("Current Date : " + d + "\nElapsed milliseconds since january 1, 1970 : " + n + "\nElapsed minutes since January 1, 1970 : " + c);

});


  //task no 7
$('#task33').click(function()
{	
	var d = new Date();
  	var hours = d.getHours();
  	var minutes = d.getMinutes();
  	var ampm = hours >= 12 ? 'pm' : 'am';
  	if (hours >= 12 ) 
  	{
  		alert("It's PM ");
  	}
  	else
  	{
  		alert("It's AM ");
  	}	
	

});

//task no 8
$('#task34').click(function()
{	
	var newDate = new Date();
    var lastDayPrevMonth = new Date(newDate.getFullYear(), newDate.getMonth(),0).getDate();
    console.log( new Date(new Date(newDate.getFullYear(), newDate.getMonth()-1).setDate(lastDayPrevMonth)));


});

//task no 9
$('#task35').click(function()
{	var date1 = new Date('6/18/2015');
    var date2 = new Date();
    var diffDays =  Math.ceil(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24)); 
 console.log(diffDays + '  Days Past since Last 2015');

});

//task no 10
$('#task36').click(function()
{	var date1 = new Date('12/5/2015');
    var date2 = new Date('1/1/2015');
    var diffDays =  Math.ceil(Math.abs(date2 - date1) / (1000 * 60) ); 
 console.log(diffDays + '  Seconds Past');

});


//task no 11
$('#task37').click(function()
{	var date1 = new Date();
    var diffHrs =  new Date(new Date().setHours(date1.getHours()-1)); 
 console.log('Current Date is ' + new Date() + '1 hour before it was ' + diffHrs);

});

//task no 12
$('#task38').click(function()
{	var date1 = new Date();
    var diffHrs =  new Date(new Date().setFullYear(date1.getFullYear()-100)); 
 console.log('Current Date is ' + new Date() + '100 year before it was ' + diffHrs);

});

//task no 13
$('#task39').click(function()
{	var age = parseInt(prompt('Kindly enter your age')); 
    var date1 = new Date();
    var diffHrs =  new Date(new Date().setFullYear(date1.getFullYear()-age)).getFullYear(); 
    alert('your birthday  is ' + diffHrs );

});

//task no 14
$('#task41').click(function()
{	
    document.write("<h2>K-Electric Bill</h2><br>");
    var a = prompt("Enter your name");    
    var b = prompt("Enter your Bill Month");
    var c = parseInt(prompt("Enter your total units"));
    var d = 16;
    var e = c * d;
    var f = (e * 5.5)/100 ;
    var g = Math.round(c);
    var h = Math.round(d);
    var i = Math.round(e);
    var j = Math.round(f);    
    document.write("Customer Name: " + " <h4>"+ a +"</h4>");
    document.write("Month : " + " <h4>"+ b +"</h4> ");
    document.write("Number of units : " + " <h4>"+ g +"</h4>");
    document.write("Charges per units : " + " <h4>"+ h +"</h4>");
    document.write("Net Amounts Payable ( within Due Date) : " + " <h4>"+ i +"</h4>");
    document.write("Late Payment Surchage : " + " <h4>"+ j +"</h4>");
    document.write("Gross Amount Payable ( after Due Date) : " + " <h4>"+ (i+j) +"</h4>");
});


//----------------------Chapter no 35- 38 -----------------------//

//task no 1
$('#task42').click(function()
{	
	var a = new Date();
	alert(a);
		
});

//task no 2
$('#task43').click(function()
{	
	var a =prompt("Enter your First name : ");
	var b = prompt("Enter your Second name : ");

	alert("Welcome sir/ma'am : " + a + " " + b );
		
});

//task no 3
$('#task44').click(function()
{	
	var a = parseInt(prompt("Enter your first int value"));
	var b = parseInt(prompt("Enter your second int value"));

	alert("Your sum value is : " + (a+b));
		
});

//task no 4
$('#task45').click(function()
{	
	var a = parseInt(prompt("Enter the first value to calculate"));
		var b = parseInt(prompt("Enter the value value to calculate"));
		var c = prompt("Enter the opertor to calculate (+,-,*,/)");

		if (c === '+') 
		{
			alert(a+b);
		}
		else if (c === "-") 
		{
			alert("your answer is : " + (a-b));
		}
		else if (c === "*") 
		{
			alert("your answer is : " + (a*b));
		}
		else if (c === "/") 
		{
			alert("your answer is : ");
		}
		else if (c === "%") 
		{
			alert("your answer is : " + (a % b));
		}
		else
		{
			alert("input incorrect");
		}	
		
});

//task no 5
$('#task46').click(function()
{	
	const square = function(x) 
	{
  		return x * x;
	};
	var c = prompt("Enter the integer value");
	var cv = square(c);
	alert(cv);
		
});

//task no 6
$('#task47').click(function()
{	
	function factorial(x) 
	{ 
	  if (x === 0)
	 {
	    return 1;
	 }
	  return x * factorial(x-1);	         
	}
	var a = parseInt(prompt("Enter the factorial value"));
	var b = factorial(a);
	alert(b);

});

//task no 7
$('#task48').click(function()
{	
	var start = parseInt(prompt("Enter the start number"));
	var end = parseInt(prompt("Enter the number number"));
	for (var i = start; i <=  end; i++) 
	{
		document.write(i + "<br>");
	}
	
});


//task no 8
$('#task49').click(function()
{
	const calculateHypotenuse = function (x)
	{
		const calculateSquare = function(y)
		{	
			var a = parseInt(prompt("Enter the base value"));
			var b = parseInt(prompt("Enter the perpendicular value"));
			var c = (a*a) + (b*b);
			return c;		
		};
		return calculateSquare();
	};
	
	alert("Hypotenuse  is : " + calculateHypotenuse());	
	
});


//task no 9
$('#task50').click(function()
{
	const rectangle = function (x)
	{
		const widthheight = function(y)
		{	
			var a = parseInt(prompt("Enter the width of rectangle"));
			var b = parseInt(prompt("Enter the height of rectangle"));
			var c = a + b;
			return c;		
		};
		return widthheight();
	};
	
	alert("Rectangle is  : " + rectangle());	
	
});

//task no 10
$('#task51').click(function()
{
	const palindrome =  function (myString)
	{

		/* remove special characters, spaces and make lowercase*/
		var removeChar = myString.replace(/[^A-Z0-9]/ig, "").toLowerCase();

		/* reverse removeChar for comparison*/
		var checkPalindrome = removeChar.split('').reverse().join('');

		/* Check to see if myString is a Palindrome*/
		if(removeChar === checkPalindrome){
		  
		  alert(myString + " is a Palindrome");
		}else{
		  
		  alert(myString + " is not a Palindrome");
		}
	};
	var a = prompt("enter the string to check palindrome");
	var b = palindrome(a);
});

//task no 11
$('#task52').click(function()
{
	var titleCase = function (str) 
	{
   		var splitStr = str.toLowerCase().split(' ');
   		for (var i = 0; i < splitStr.length; i++) 
   		{
       
       		splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   		}
   
   		return splitStr.join(' '); 
	};	
	var  a = prompt("Enter the string ");

	alert(titleCase(a));
});

//task no 12
$('#task53').click(function()
{
	var longestWord = function (string) 
	{
    	var str = string.split(" ");
    	var longest = 0;
    	var word = null;
    	for (var i = 0; i < str.length; i++) 
    	{
        	if (longest < str[i].length) 
        	{
            	longest = str[i].length;
            	word = str[i];
        	}
    	}
    	return word;
	};
	var a =prompt("enter the string to check longest word");
	alert(longestWord(a) + " is longest word of string");
});

//task no 13
$('#task54').click(function()
{
	var STR = function (string,letter) 
	{
		var count = 0;
		for(var i = 0; i <= string.length ; i++)
		{
			if (letter == string[i]) 
			{
				count++;
			}
		}
		alert(count);
	};

		var a = prompt("Enter the string ");
		var b = prompt("Enter the letter").toLowerCase();
		var c = STR(a,b);
});

//task no 14
$('#task55').click(function()
{
	var calcCircumference = function(radius)
	{
		alert("Circumference of Cirlce is : " + ((2)*Math.PI * radius).toFixed(2));
	};
	var calcArea = function (radious)
	{
		alert("Area of Circle is : " + (Math.PI * (radious * radious)).toFixed(2) );	
	};

	var a = prompt("Enter radius of Circumference");
	var b = prompt("Enter the Radius of Area of Cirlce");
	calcCircumference(a);
	calcArea(b);

});