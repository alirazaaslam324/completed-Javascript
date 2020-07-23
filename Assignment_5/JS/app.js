							// Chapter no 1 start

/* task 1*/
alert("Welcome JS! this is alert message");

/*task 2*/
$('#task1').click(function()
{
var pass = '12345';
if ($('#pass').val() == pass )
{
alert('Welcome to JS Land..\nHappy Coding!');
}
else
{
alert('Error! Please enter a valid password.');
}
});

// task 3
$('#task2').click(function()
{
alert('Welcome to JS Land..');
alert('Happy Coding!');
});

// task 4
$('#task3').click(function()
{
console.log("Hello... I can run through my web browser's console");
});

////////////////////////////////////////////////////////////////
							//chapter no 2 


//task 1
$('#task4').click(function()
{
var username = '';
var myName = "Ali Raza aslam";
var message = "Hello World!";
alert(message);
});

//task 2
$('#task5').click(function()
{
var name = 'aliraza';
var rollno = 'wm-1998';
var age = '21 years old';
var course = 'web development and hybrid app';
alert(name);
alert(rollno);
alert(age);
alert(course);
});

//task 3
$('#task6').click(function()
{
var str = "PIZZA";
for (let i = str.length; i >= 0; i--)
{
var temp = '';

for (let j=0; j<i; j++)
{
temp= temp+ str[j];
}
document.write(temp + '<br>');
}

});

//task 4
$('#task7').click(function()
{
var email = 'alirazaaslam324';
var result = email.concat('@','gmail.com')
alert('My email address is ' + result);
});

//task 5
$('#task8').click(function()
{
var book = 'A smarter way to learn JavaScript';
alert('i am trying to learn from the Book ' + book);
});

//task 6
$('#task9').click(function()
{
$('#message').html('Yah! I can write HTML content through JavaScript');
});

//task 7
$('#task10').click(function()
{
var str = '▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬';
alert(str);
});

/////////////////////////////////////////////////////
							// chapter no 3 start

//task 1
$('#task11').click(function()
{
var age = '21';
alert('i am '+ age + ' yaers old');

});


//task 2
$('#task12').click(function()
{
	var n = localStorage.getItem('counter');
	if (n === null) {
	    n = 0;
	} else {
	    n++;
	}
	alert("You Have visited this site " + n + " times");
	localStorage.setItem("counter", n);
});

//task 3
$('#task13').click(function()
{
var birthyear = '1996';
$('#birth').html('My birth year is ' + birthyear + "\n<br> Data type of my decleared variable is number.");
});

//task 4
$('#task14').click(function()
	{
		var visiter_name = prompt("Enter your name");
		var Product_title = prompt("Enter your Product_title - (like:T-shirt)");
		var Quantity = prompt("Enter your Quantity");
		var store = prompt("Enter which store site (like-amazon)");

		$('#product').html("<br>" + visiter_name + " ordered " + Quantity + " " + Product_title + "(s) on " + store + " Clothing Store");

	});
//////////////////////////////////////////////////////////////////////////////
									//chapter 4

//task 1
$('#task15').click(function()
	{
		var _1s = "$-doller";
		var _2s = "_(underscore)";
		var _3s = "numbers";
		var _4s = "one letter";

		$('#legal').html("Variable names can only contain " + _1s + " , " + _2s + " , " + _3s + " and "+ _4s + ". For example $my_1stVariable <br><br>");
		var  $1 = "$";
		var  $2 = "_";
		var  $3 = "letters";

		$('#ilegal').html(" Variables must begin with a " + $1 + " , " + $2 + " or "+ $3 + ". For example $name, _name or name <br><br>");

		var case1 = "sensitive";
		$('#sensitive').html(" Variable names are case " + case1 + " <br>");

		var key = "keyword";
		$('#keyword').html("Variable names should not be JS "+ key);

	});

//////////////////////////////////////////////////////////////////////////////
									//chapter 5

//task 1
$('#task16').click(function()
	{
		var num1 = parseInt("3");
		var num2 = parseInt("5");
		var num3 = (num1 + num2);
		$('#add').html("Sum of "+ num1 +" and " + num2 +" answer is = " + num3);
	});

//task 2
$('#task17').click(function()
	{
		var num1 = parseInt("5");
		var num2 = parseInt("3");
		var num3 = (num1 - num2);
		$('#sub').html("<br>Subtract of "+ num1 +" and " + num2 +" answer is = " + num3);
	});

//task 3
$('#task18').click(function()
	{
		var num1 = parseInt("5");
		var num2 = parseInt("3");
		var num3 = (num1 * num2);

		$('#mul').html("<br>Multiply of "+ num1 +" and " + num2 +" answer is = " + num3);
	});

//task 4
$('#task19').click(function()
	{
		var num1 = parseInt("15");
		var num2 = parseInt("3");
		var num3 = (num1 / num2);

		$('#divide').html("<br>Divide of "+ num1 +" and " + num2 +" answer is = " + num3);
	});

//task 5
$('#task20').click(function()
	{
		var num1 =parseInt(prompt("Enter the number for Modulus"));	
		if(num1 % 2 == 0)
		{
			$('#modulus').html("<br>Modulus of "+ num1 +" number : is even ");
		}
		else
		{
			$('#modulus').html("<br>Modulus of "+ num1 +" number : is odd ");			
		}
	});

//task 6
$('#task21').click(function()
	{
		$('#und').html('<br>Value after variable declaration is: undefined <br>');

		var num = parseInt("5");
		$('#initial').html("Initial value: " + num);

		var nm = ++num;
		$('#increment').html("<br>Value after increment : " + nm);

		var n = nm+7;
		$('#sum').html("<br>Value after Addition is : " + n);

		var s = --n;
		$('#decrement').html("<br>Value after decrement is: "+s);

		var remender = s% 3;
		$('#remender').html("<br>The Remainder is: "+remender);

	});

//task 7
$('#task22').click(function()
	{
		var ticket = parseInt('600');
		var buy = parseInt(prompt("enter how much ticket to buying to movie"));
		var total = ticket * buy;
		$('#ticket').html("<br>Total cost to buy " + buy + " tickets to a movie is " + total+ "PKR");
	});

//task 8
$('#task23').click(function()
	{
		var number = parseInt(prompt("Enter the number of table you want (like - 5)"));
		document.write("<h2>Table of 9</h2>");
		for(var i=1; i<=10; i++)
		{
			document.write(number + "x " + i + " = " + number*i + "<br><br>");
		}
	});


//task 9
$('#task24').click(function()
	{
		var celcius = parseFloat(prompt("Enter Your temperature in celsius"));
		var farhenheit = parseFloat(celcius * 9.0 / 5) + 32;
		$('#temp').html("<br>"+celcius +" <sup>o</sup>C "+ " ,and farhenheit temperature is : " + farhenheit);
		var farhen = parseFloat(prompt("Enter Your temperature in farhenheit"));
		var cel = parseFloat(farhen - 32.0) * 5.0 / 9.0;
		$('#temp1').html("<br>"+farhen +" <sup>o</sup>F "+ " ,and celsius temperature is : " + cel);

	});


//task 10
$('#task25').click(function()
	{
		var item1 = parseInt("650");
		var qty1 = parseInt(prompt("Enter the Quantity of first item which price is 650"));
		var item2 = parseInt("100");
		var qty2 = parseInt(prompt("Enter the Quantity of second item which price is 100"));
		var charge = parseInt("100");
		var cost = parseInt((item1*qty1)+charge+(item2*qty2));
		$("#item-1").html("<br>Price of item one is : "+ item1);
		$("#qty-1").html("<br>Quantity of item one is : "+ qty1);
		$("#item-3").html("<br>Price of item one is : "+ item2);
		$("#qty-2").html("<br>Quantity of item one is : "+ qty2);
		$("#charges").html("<br>Shipping Charges  is : "+ charge);
		$("#totalcharges").html("<br>Total cost of your Order  is : "+ cost);

	});

//task 11
$('#task26').click(function()
	{
		var totalmarks = parseInt(prompt("Enter your Total Marks"));
		var obtainmarks = parseInt(prompt("Enter your Obtain Marks"));
		var percentage = ((obtainmarks*100)/totalmarks);

		document.write("<h2>Marks Sheet</h2><br>");
		document.write("<br>Total Marks is : " + totalmarks);
		document.write("<br>Obtained Marks is : " + obtainmarks);
		document.write("<br>Your Percentage is : " + percentage + "%<br>");

	});

//task 12
$('#task27').click(function()
	{
		var doller = parseFloat(prompt("How much Dollers do you have:"));
		var riyal = parseFloat(prompt("How much Riyals do you have:"));
		var dollerrate = parseFloat("104.80");
		var riyalrate = parseFloat("28.00");
		var totalcrny = ((doller * dollerrate)+ (riyal*riyalrate));
		document.write("<h2>Currency in PKR</h2><br>");
		document.write("<br>Total Currency in PKR : Rs." + totalcrny);

	});

//task 13
$('#task28').click(function()
	{
		 var a = parseInt("10");
		 var test = (((a+5)*10)/2);
		 alert("Performing arithemetics opertors and final result is : " + test);
	});

//task 14
$('#task29').click(function()
	{
		var currentyear = parseInt("2020");
		var previousyear = parseInt(prompt("Enter your Birth year : (like 1984)"));
		var age = currentyear - previousyear;
		document.write("<h2>Age Calculator</h2><br>");
		document.write("<br>Current year is : " + currentyear);
		document.write("<br>Birth year is : " + previousyear);
		document.write("<br>Your Age is : " + age);

	});

//task 15
$('#task30').click(function()
	{
		var radius = parseInt(prompt("Enter the Radius of Circle :"));
		var circle = parseFloat(2 *(Math.PI)* radius).toFixed(2);
		var area = parseFloat((Math.PI) * (radius * radius)).toFixed(2);
		document.write("<h2>The Geometrizer</h2><br>");
		document.write("<br>Radius of Circle : " + radius);
		document.write("<br>The circumference is : " + circle);
		document.write("<br>The Area of circle is : " + area);
	});

//task 16
$('#task31').click(function()
	{
		var snaks = "Chocolate Chip";
		var age = parseInt(prompt("Enter your Current Age"));
		var age1 = parseInt(prompt("Enter your Estimated Maximum Age"));
		var diff = age1 - age ;
		var perday = parseInt(prompt("Enter Per day snaks you eat"));
		var ttl = diff * perday;
		document.write("<h2>The Lifetime Suplly Calculator</h2><br>");
		document.write("<br>Favorite Snacks : " + snaks);
		document.write("<br>Current age is : " + age);
		document.write("<br>Estimated Maximum Age is : " + age1);
		document.write("<br>Amount of snacks per day : " +perday);
		document.write("<br>You will need " + ttl + " Chocolate chip to last you until the ripe old age of  : " + age1);



	});

////////////////////////////////////////////////////////////////////////
								//chapter 6-9


//task 1
$('#task32').click(function()
	{

		var a = parseInt(prompt("Enter the value of integer"));

		document.write("<h3>Results: </h3><br>");
		document.write("<br>The value of first is : " + a);
		document.write("<br>..........................................................");
		document.write("<br> The value of ++first is : "+ (++a));
		var b = a++;
		document.write("<br>now the value of first is : " + (b));
		document.write("<br><br>The value of ++first is : "+ (b));
		document.write("<br>now the value of first is : " + (++b));
		var c = b++;
		document.write("<br><br>The value of --first is : "+ (--c));
		var d = c--;
		document.write("<br>now the value of first is : " + d);
		document.write("<br><br>The value of --first is : "+ d);
		document.write("<br>now the value of first is : " + (--d));

	});

//task 2
$('#task33').click(function()
	{
		var a = parseInt("2");
		$('#result1').html("--a is : " + (--a));
		var e = a--;
		var b = parseInt("1");

		var result1 = (e) - (--b);
		$('#result2').html("<br>--a - --b is : " + result1);
		var d = ++b;
		var f = result1 + (++d);		
		$('#result3').html("<br>--a - --b + ++b is : " + f);
		
		$('#result4').html("<br>--a - --b + ++b + b-- is : " + (f + (d--)));	

	});

//task 3
$('#task34').click(function()
	{
		var welcome;
		var name = prompt("Enter your name please!");
	    var date = new Date();  
	    var hour = date.getHours();  
	    var minute = date.getMinutes();  
	    var second = date.getSeconds();  
	    if (minute < 10) {  
	      minute = "0" + minute;  
	    }  
	    if (second < 10) {  
	      second = "0" + second;  
	    }  
	    if (hour < 12) {  
	      welcome = "good morning";  
	    } else if (hour < 17) {  
	      welcome = "good afternoon";  
	    } else {  
	      welcome = "good evening";  
	    }  
	    document.write("<h2>" + "<font color='red'>" + welcome + "!</font><br>" + name + " to our website");  
	    
	});


//task 4
$('#task35').click(function()
	{
		var number = parseInt(prompt("Enter the number of table you want (like - 5)"));
		var defaul = parseInt("5");
		if(!number == "")
		{
			document.write("<h2>Table of 9</h2>");
			for(var i=1; i<=10; i++)
			{
				document.write(number + "x " + i + " = " + number*i + "<br><br>");
			}
		}
		else
		{
			document.write("<h2>Table of 9</h2>");
			for(var i=1; i<=10; i++)
			{
				document.write(defaul + "x " + i + " = " + (defaul*i) + "<br><br>");
			}
		}
		
	});


//task 4
$('#task36').click(function()
	{
		var space = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
		var english = prompt("Enter your first subject name:");
		var engmark = parseInt(prompt("Enter first subject obtain marks"));
		var math = prompt("Enter your second subject name:");
		var mathmark = parseInt(prompt("Enter second subject obtain marks"));
		var urdu = prompt("Enter your third subject name:");
		var urdumark = parseInt(prompt("Enter third subject obtain marks"));
		var ttlsub = parseInt("100");
		var engper = ((engmark*100)/ ttlsub);
		var mathper = ((mathmark*100)/ ttlsub);
		var urduper = ((urdumark*100)/ ttlsub);

		var fnlper = (((urdumark+engmark+mathmark)*100)/300);
		document.write("<br><h3>Subject\t total marks \t obtained marks \t percentage </h3><br>");
		document.write("<br>"+ english + space + space  + ttlsub + space + space + engmark + space + space + engper + "%");
		document.write("<br>"+ math + space + space + ttlsub + space + space + mathmark + space + space + mathper + "%");
		document.write("<br>"+ urdu + space + space + ttlsub + space + space + urdumark + space + space + urduper + "%");

		document.write("<br><b>"+ space + space + (ttlsub*3) + space + space + (urdumark+engmark+mathmark) + space + fnlper + "%</b>");
		
		
	});


//////////////////////////////////////////////////////////////////////////////////////////
									// chapter 9-11

//task 1
$('#task37').click(function()
	{
		var city = prompt("Enter your city name: like - karachi");
		if (city == "karachi" || city == "Karachi" || city == "KARACHI")
		{
			alert("Welcome to city of lights");
		}
		else
		{
			alert("Welcome to Home");
		}
	});

//task 2
$('#task38').click(function()
	{
		var gender = prompt("Enter your Gender: like - male/female");
		if (gender == "MALE" || gender == "Male" || gender == "male")
		{
			alert("Good Morning Sir!");
		}
		else
		{
			alert("Good Morning ma'am!");
		}

	});


//task 3
$('#task39').click(function()
	{
		var color = prompt("Enter the color : like - red/yellow/green (case sensitive)");

		if (color == "red" ||color == "Red" || color == "RED" ) 
		{
			$('#color').html("<font color='red'>" + "Must stop" + "</font><br>");
		}
		else if (color == "yellow" ||color == "Yellow" || color == "YELLOW" ) 
		{
			$('#color').html("<font color='yellow'>" + "Must stop" + "</font><br>");
		}
		else if (color == "green" ||color == "Green" || color == "GREEN" ) 
		{
			$('#color').html("<font color='green'>" + "Must stop" + "</font><br>");
		}
		else
		{
			$('#color').html("<br>This color is not traffic color");	
		}
	});

//task 4
$('#task40').click(function()
	{
		var fuel = parseFloat(prompt("Enter your car fuel limit in float value"));
		if (fuel < 0.25) 
		{
			alert("Please refill the fuel in your car");
		}
		else
		{
			alert(" very fuel in your car");
		}

	});

//task 5
$('#task41').click(function()
	{
		var a = 4; 
		if (++a === 5)
			{ 
				alert("given condition for variable a is true"); 
			} 

		var b = 82; 
		if (b++ === 83)
			{ 
				alert("given condition for variable b is true"); 
			}
 
		var c = 12; 
		if (c++ === 13)
			{ 
				alert("condition 1 is true"); 
			} 
		if (c === 13)
			{ 
				alert("condition 2 is true"); 
			} 
		if (++c < 14)
			{ 
				alert("condition 3 is true"); 
			} 
		if(c === 14)
			{ 
				alert("condition 4 is true"); 
			}
 
		var materialCost = 20000; 
		var laborCost = 2000; 
		var totalCost = materialCost + laborCost; 
		if (totalCost === laborCost + materialCost)
			{
				alert("The cost equals"); 
			} 
 
		if (true)
			{ 
				alert("True"); 
			} 
		if (false)
			{
				alert("False"); 
			} 
	});


//task 6
$('#task42').click(function()
	{
		var ttl =  parseInt(prompt("Enter your Total Marks: "));
		var obtain = parseInt(prompt("Enter your Obtained Marks: "));
		var percent = (obtain*100)/ttl;
		document.write("<h3>Marks Sheet</h3><br>");
		document.write("<br>Total Marks : " + ttl);
		document.write("<br>Obtained Marks : " + obtain);
		document.write("<br>Percentage : " + percent + "%");
		if (percent >= 80) 
		{
			document.write("<br>Grade : A+");
			document.write("<br>Remarks : Excellent");

		}
		else if (percent >= 70) 
		{
			document.write("<br>Grade : A");
			document.write("<br>Remarks : Good");
		}
		else if (percent >= 60) 
		{
			document.write("<br>Grade : B");
			document.write("<br>Remarks : You need to improve");
		}
		else if (percent < 60) 
		{
			document.write("<br>Grade : Fail");
			document.write("<br>Remarks : Sorry!");
		}

	});

//task 7
$('#task43').click(function()
	{
		var secret = parseInt("4");
		var num = parseInt(prompt("Enter the number to check secret number"));
		if (num == secret) 
		{
			alert("Bingo! Correct Answer");
		}
		else
		{
			alert("Close enough to the correct answer");
		}

	});

//task 8
$('#task44').click(function()
	{
		var num1 =parseInt(prompt("Enter the number to check even or odd"));	
		if(num1 % 2 == 0)
		{
			alert("Your number " + num1 +" : is even ");
		}
		else
		{
			alert("your number  "+ num1 +"  : is odd ");
		}

	});

//task 9
$('#task45').click(function()
	{
		var temp = parseInt(prompt("Enter the temperature"));
		if (temp >40) 
		{
			alert("It is too hot outside.");
		}
		else if (temp >30) 
		{
			alert("The Weather today is Normal.");
		}
		else if (temp >20) 
		{
			alert("Today’s Weather is cool.");
		}
		else if (temp >10) 
		{
			alert("“OMG! Today’s weather is so Cool.");
		}
	});

//task 10
$('#task46').click(function()
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
//////////////////////////////////////////////////////////////////////////////
							// chapter no 12-13

//task 1
$('#task47').click(function()
	{
		var test = prompt("Eenter the letter or number to check what is this");
		if (test === (parseInt(test*1)))
		{
			alert("your input is numeric");
		}
		else if (test === test.toUpperCase()) 
		{
			alert("your letter is Uppercase");
		}
		else if (test === test.toLowerCase()) 
		{
			alert("your letter is Lowercase");
		}


	});

//task 2
$('#task48').click(function()
	{
		var a = parseInt(prompt("Enter the first enteger"));
		var b = parseInt(prompt("Enter the Second enteger"));
		if (a > b) 
		{
			alert("First enteger is Larger then b");
		}
		else if(b>a)
		{
			alert("Second enteger is lagrger then a");
		}
		else if (a == b) 
		{
			alert("Both are equal value");
		}
		else
		{
			alert("Invalid input");
		}


	});

//task 3
$('#task49').click(function()
	{
		var a =parseInt(prompt("Enter the number to check  + , - , 0 "))
		if (a < 0) 
		{
			alert("Your number is Negative");
		}
		else if (a > 0 ) 
		{
			alert("Your number is Positive");
		}
		else if (a == 0) 
		{
			alert("your number is equal to zero");
		}
		else
		{
			alert("invalid input");
		}

	});

//task 4
$('#task50').click(function()
	{
		var password = "aliraza123";
		var input = prompt("Enter your Password");

		if (input == "") 
		{
			alert("Please Enter the Password");
		}	
		else if (input == password)
		{
			alert("Correct! The password you entered matches the original password");
		}
		else 
		{
			alert("Incorrect Password");
		}

	});


//task 5
$('#task51').click(function()
	{
		var greeting; 
		var hour = 13; 
		if (hour < 18) 
			{ 
				greeting = "Good day"; 
				alert(greeting);
			}
		else 
			{
				greeting = "Good evening"; 
				alert(greeting);
			}
	});

//task 6
$('#task52').click(function()
	{
		var time = parseInt(prompt("Enter the current time without use (:colon) like 1900"))
		if (time >= 0 && time < 1200) 
		{
			alert("Good Morning!");
		}
		else if (time >= 1200 && time < 1700)
		{
			alert("Good Afternoon");
		}
		else if (time >= 1700 && time < 2100) 
		{
			alert("Good evening");
		}
		else if (time >= 2100 && time < 2359) 
		{
			alert("Good Night");
		}
		else
		{
			alert("Invalid input");
		}

	});

////////////////////////////////////////////////////////////////////////
								//chapter 17-20

//task 1
$('#task53').click(function()
	{
		for (var i =1; i <=10; i++) 
		{
			document.write(i + "<br>");
		}
	});

//task 2
$('#task54').click(function()
	{
		var number = parseInt(prompt("Enter the number of table you want (like - 5)"));
		var length = parseInt(prompt("Enter the length or table"));
	
		document.write("<h2>Table of 9</h2>");
		for(var i=1; i<=length; i++)
		{
			document.write(number + "x " + i + " = " + number*i + "<br><br>");
		}
	});

//task 3
$('#task55').click(function()
	{
		var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
		document.write(fruits[0] + "<br>");
		document.write(fruits[1] + "<br>");
		document.write(fruits[2] + "<br>");
		document.write(fruits[3] + "<br>");
		document.write(fruits[4] + "<br>");

		for (var i=0; i< fruits.length; i++) 
		{
			
			document.write("<br>Element at index "+ i +" is " + fruits[i]);
			
		}

	});

//task 4
$('#task56').click(function()
	{
		document.write("<h4>Counting: </h4><br>");
		for(var i =1; i<=15; i++)
		{
			document.write(i + ",");
		}
		document.write("<h4>Reverse Counting: </h4><br>");
		for(var j = 10; j >= 1; j--)
		{
			document.write(j + ",");
		}
		document.write("<h4>Even : </h4><br>");
		for(var k = 0; k<= 20; k++)
		{
			if(k % 2 == 0) 
			{
				document.write(k + ",");

			}
		}
		document.write("<h4>Odd : </h4><br>");
		for(var l = 0; l< 20; l+=2)
		{
			if(l % 2 == 0) 
			{
				document.write((l+1) + ",");

			}
			
		}
		document.write("<h4>Series : </h4><br>");
		for(var m = 1; m<= 20; m++)
		{
			if(m % 2 == 0) 
			{
				document.write(m + "k , ");

			}
		}

	});


//task 5
$('#task57').click(function()
	{
		var arr = ["cake","apple pie","cookie","“chips","patties"];
		var check = prompt("Welcome to ABC Bakery. what do you want to order sir/ma'am?")

		if(!check == "")
		{
			alert(check + " is available at index "+ (arr.indexOf(check))+ " in our Bakery ");
		}
		else
		{
			alert("invalid input");
		}

	});
	

//task 6
$('#task58').click(function()
	{
		var arr = [24, 53, 78, 91, 12];

		alert("The Largest number of array is : " + Math.max(24, 53, 78, 91, 12));

	});


//task 7
$('#task59').click(function()
	{
		var arr = [24, 53, 78, 91, 12];

		alert("The smallest number of array is : " + Math.min(24, 53, 78, 91, 12));

	});


//task 8
$('#task60').click(function()
	{		
		for (var i = 0; i< 100; i++)
		{
			if (i % 5 ==0) 
			{
				document.write((i+5) + ",");
			}
		}
	});


//task 9
$('#task61').click(function()
	{
		
		var _2darr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];

		for(var i = 0; i < 3; i++) 
		{ 
    			document.write(_2darr[i] + "<br>"); 
    		
		} 

	});

/////////////////////////////////////////////////////////////////////
				//chapter 14-16

// task 1
$('#task62').click(function()
	{
		var ar1 = [];
		var ar2;
		var ar3 = ["ali","raza","aslam","khokar","bhatti"];
		var ar4 = [1,2,3,4,5];
		var ar5 = [true, false];
		var ar6 = ["string","mixed", 15, true];
		var ar7 = ["SSC","HSC","BCS","BCOM","MS","M.Phil","PhD"];
		document.write("<h2>Qualifications : </h2>");

		for(var i = 1; i< ar7.length; i++)
		{
			document.write(i + " ) " + ar7[i] + "<br>");
		}
	});
		
// task 2
$('#task63').click(function()
	{
		var ar1 = ["Michal","John","Tony"];
		var ar2 = [320,230,480];
		for(var i = 0; i< ar1.length; i++)
		{
			var ar3 = ar2[i]*100;
			var ar4 = ar3/500;			
			document.write("Score of "+ ar1[i] + "is" + ar2[i] + ". Percentage : " + ar4 +  "% <br>");
		}
	});
		
// task 3
$('#task64').click(function()
	{
		var ar1 = ["red","yellow","green","blue"];
		for (var i = 0 ; i < ar1.length ; i++)
		{
			alert(ar1[i]);
		}
		var ar2 = prompt("enter the new color to add :  begining");
		var ar3 = prompt("enter the new color to add : begining");
		 var arr1 = ar1.unshift(ar2,ar3);

		for(var j = 0; j<ar1.length; j++)
		{
			alert(ar1[j]);
		}
		var ar4 = prompt("enter the new color to add : ending ");
		var ar5 = prompt("enter the new color to add : ending");
		var arr2 = ar1.push(ar4,ar5);
		for(var k = 0; k<ar1.length; k++)
		{
			alert(ar1[k]);
		}
		var ar6 = prompt("enter the new color to add : begining");
		var ar7 = prompt("enter the new color to add : begining");
		var arr3 = ar1.unshift(ar6,ar7);
		for(var l = 0; l<ar1.length; l++)
		{
			alert(ar1[l]);
		}
		arr4 = ar1.shift(0);
		for(var m = 0; m<ar1.length; m++)
		{
			alert(ar1[m]);
		}
		arr5 = ar1.pop(0);
		for(var n = 0; n<ar1.length; n++)
		{
			alert(ar1[n]);
		}

	});

// task 4
$('#task65').click(function()
	{
		var arr1 = [320,645,100,112]
		document.write("Score of Student : ");
		for(var i = 0; i < arr1.length ;  i++)
		{

			document.write(arr1[i] + " , ");
		}
		var sort = arr1.sort();
		document.write("<br>Ordered Score of Student : ");
		for(var j = 0; j < arr1.length ;  j++)
		{
			document.write(sort[j] + " , ");
		}
	});

// task 5
$('#task66').click(function()
	{
		var ar1 = ["Karachi","lahore","Islamabad","Quetta","Peshawar"];
		document.write("<h2>Cities list </h2><br>");
		for(var i = 0; i < ar1.length ; i++)
		{
			document.write(ar1[i]+" , ");
		}
		document.write("<h2>Selected cities list </h2><br>");
		var ar2 = [ar1[0], ar1[2], ar1[3]];
		for(var j = 0 ; j < ar2.length ; j++)
		{
			document.write(ar2[j] + " , ");
		}

	});

// task 6
$('#task67').click(function()
	{
		var arr = ["This" ,  "is" ,  "my" ,  "cat"]; 
		document.write("<h2>Array : </h2>");
		for(var i = 0; i < arr.length ; i++)
		{
			document.write(arr[i]+ ",");
		}
		document.write("<h2>String : </h2>");
		for(var j = 0; j < arr.length ; j++)
		{
			document.write(arr[j]+ " ");
		}
	});

// task 7
$('#task68').click(function()
	{
		document.write("<h2>Devices : </h2>");
		var arr = ["keyboard","mouse","printer","monitor"];
		for(var i = 0; i < arr.length; i++ )
		{
			document.write(arr[i] + ",");
		}
		document.write("<h2>Out : </h2>");
		for ( var j = arr.length ; j >= 0; j--)
		{
			document.write(arr[j] +  "<br>");
		}

	});

// task 7
$('#task69').click(function()
	{
		var arr = ["Apple", "Samsung","Motrola", "Nokia", "Sony", "Haier"];
		var obj = document.getElementById("mylist");
		for(var i = 0; i < arr.length; i++)
		{
			document.write(arr[i] + " ");
		}

	});