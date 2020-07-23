//--------------------------Chapter 38-42 ---------------------------//

//-----------------------------Tast 1 -------------------------------//

$('#task-1').click(function()
{
    var a = parseInt(prompt("Enter the Value to calculate"));
    var b = parseInt(prompt("Enter the Value to calculate raised to power value"));

    var c = Math.pow(a,b);

    alert("Your Answer is " + c);
});

//-----------------------------Tast 2 -------------------------------//
$('#task-2').click(function()
{
    var a = parseInt(prompt("Enter the year to check Leap year true or not"));
    if( (a % 100 === 0) ? (a % 400 === 0) : (a % 4 === 0) )
    {
        alert("Your LEAP YEAR is " + a +" True ");

    }
    else
    {
        alert("Your LEAP YEAR is " + a +" False ");
    }
});

//-----------------------------Tast 3 -------------------------------//
$('#task-3').click(function()
{
    var a = parseInt(prompt("Enter the first value of trianlge "));
    var b = parseInt(prompt("Enter the second value of trianlge "));
    var c = parseInt(prompt("Enter the third value of trianlge "));       
    var S = parseInt((a+b+c)/2);
    var area = (S*(S-a)*(S-b)*(S-c));

    alert("Area of Triangle is " + area + " .");
});


//-----------------------------Tast 4 -------------------------------//
$('#task-4').click(function()
{
    //---------------main function -------------//
    
    var a = parseInt(prompt("Enter the Marks of english"));
    var b = parseInt(prompt("Enter the Marks of math"));
    var c = parseInt(prompt("Enter the Marks of urdu"));    
    
    var marks = function(a,b,c)
     {
         return (a + b + c);        
     }
    var total = parseInt(marks(a,b,c));

    var averge = function(avg)    
    {
        return (avg/3);
    }
    var avg = averge(total);
    var percentage = function(per)
    {
        return ((per/300)*100);
    }
    var percent = percentage(total);
    alert("your total Marks is " + total + " .");
    alert("your average is " + avg + " .");
    alert("your percentage is " + percent + "% .");
});

//-----------------------------Tast 5 -------------------------------//
$('#task-5').click(function()
{
    var a = prompt("Enter the string ");
    var b = prompt("enter the index value to find in string");
    function myIndexOf(a, b) 
    {
        var len = a.length;
        var wordLen = b.length;
        for(var i = 0; i < len; i++) 
        {          
            for(var j = 0; j < wordLen; j++) 
            {
                if(a[i+j] != b[j]) 
                {
                    break;
                }
            }
            if(j == wordLen) 
            {
                return i;
            }
        }    
        return a,b;
    }
    var rst = myIndexOf(a,b);
    alert("String index of is  " + rst);
});


//-----------------------------Tast 6 -------------------------------//
$('#task-6').click(function()
{
    var a = prompt("Enter the string to avoid vowels words");
    
    function removeVowels( input )
    {
        return input.replace(/[aeiou]/gi, "");
    }

    var rst = removeVowels(a);
    alert("String after delete vowels : " + rst);

});

//-----------------------------Tast 7 -------------------------------//
$('#task-7').click(function()
{    
    var str = "Pleases read this application and give me gratuity";
    function findOccurrences() {
        
        var count = 0;
        let haveSeenVowel = false;
      
        for (const letter of str.toLowerCase()) {
          switch (letter) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
              {
                if (haveSeenVowel) {
                  count++;
                  haveSeenVowel = false;
                } else {
                  haveSeenVowel = true;
                }
                break;
              }
            default:
              haveSeenVowel = false
          }
        }      
        return count
      }
    alert("String is : " + str + "\n number of count is " + findOccurrences());

});


//-----------------------------Tast 8 -------------------------------//
$('#task-8').click(function()
{
    var a = prompt("Enter the First city name");
    var b = prompt("Enter the second city name");
    var c = parseInt(prompt("Enter the distance in (km)"));

    var function1 = function(meter)
    {
        return meter * 1000;
    }
    var function2 = function(feet)
    {
        return feet * (3280.84);
    }
    var function3 = function(inch)
    {
        return inch * (39370.1);
    }
    var function4 = function(centimeter)
    {
        return centimeter * (100000);
    }

    var m = function1(c);
    var f = function2(c);
    var i = function3(c);
    var c = function4(c);

    alert("Distance between " + a + " and " + b + " in meter is : " + m);
    alert("Distance between " + a + " and " + b + " in feet is : " + f);
    alert("Distance between " + a + " and " + b + " in inches is : " + i);
    alert("Distance between " + a + " and " + b + " in centimeter is : " + c);

});

//-----------------------------Tast 9 -------------------------------//
$('#task-9').click(function()
{
    var worktime = parseInt(prompt("Enter the Employee overtime in hr"));
    var overtime;
    overtimepay = 0;
    if(worktime>40)
    {
        overtime = worktime - 40;
        overtimepay = overtimepay + (12 * overtime);

        alert("Total overtime pay of 1 employee is " + overtimepay);
    }
    else
    {
        alert("invalid input");
    }
});

//-----------------------------Tast 10 -------------------------------//
$('#task-10').click(function()
{
    var a = parseInt(prompt("Enter the Amount to withdraw!"));

    var b = parseInt((a/100));
    var c = parseInt(((a%100)/50));
    var d = parseInt((((a%100)%50)/10));
    var e = parseInt((((a%100)%50)%10));
    alert("you will have require 100 note is :" + b);
    alert("you will have require 50 note is :" + c);
    alert("you will have require 10 note is :" + d);
    alert("your remember amount is :" + e);
});


//--------------------------Chapter 43-48 ---------------------------//

//-----------------------------Tast 11-12 -------------------------------//

$('.task-11').click(function()
{
    alert("Thanks for purchasing Iphones");
});

//-----------------------------Tast 13 -------------------------------//
$(".btn-danger").click(function(ctl)
{
    $(ctl).parents.remove();
});


//-----------------------------Tast 14 -------------------------------//
function rollover(x) 
{
    x.src = "image/1.jpg";
    
}
function mouseaway(x)
{
    x.src = "image/2.jpg";
}

//-----------------------------Tast 15 -------------------------------//
$("#plus").click(function()
{
    var a = localStorage.clickcount = Number(localStorage.clickcount)+1;
    $("#counter").html(a);
});

$("#minus").click(function()
{
    var a = localStorage.clickcount = Number(localStorage.clickcount)-1;
    $("#counter").html(a);
});

//--------------------------Chapter 49-52 ---------------------------//

//-----------------------------Tast 15 -------------------------------//
