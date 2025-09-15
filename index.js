        //variable declare and Initialization
        //Using var keyword
        var price=300;
        console.log(price);  //output:300
        //let keyword
        let number=526;
        number=4567;
        console.log(number);  //output:4567
        //const keyword
        const name="Sora";
        console.log(name);//output:sora
        console.log("Name is : " + name  + "Its type is : " +  typeof (name));//output:Name is : Sora Its type is :String
        //Datatypes
        //primitive datatype
        //number
        let n1=7;
        console.log(n1);//output:7
        let n2=77.12;
        console.log(n2);//output:77.12
        let n3=Infinity;
        console.log(n3);//output:Infinity
        let n4='something tools in JS';
        console.log(n4);//output:smething tools in JS
        //String
        let s1="hi ,hello World";
        console.log(s1);//output:hi ,hello World
        //boolean
        let isAvaliable=true;
        console.log(isAvaliable);//output:true
        //null
        let age=null;
        console.log(age);//output:null
        //undefined
        let a;
        console.log(a);//output:undefined
        //symbol
        let sname=Symbol("Hello World");
        let s2name=Symbol("Hello World");
        console.log(sname==s2name);//output:false
        console.log(sname!=s2name);//output:true
        //bigint
        let integer=BigInt("0101010101000001010");
        console.log(integer);//output:101010101000001010n
        //Non-Primitive datatypes
        //Object
        let details={name:"Company",location:"Nodia"};
        console.log(details);//output:{ name: 'Company', location: 'Nodia' }
        //Arrays
        let values=[1,2,5,6,7];
        console.log(values);//output:[ 1, 2, 5, 6, 7 ]
        let studentdetails=[4,"CSE",{name:"Ram",location:"ghdjd"},[3,7,2,6]];
        console.log(studentdetails);//output:[ 4, 'CSE', { name: 'Ram', location: 'ghdjd' }, [ 3, 7, 2, 6 ] ]
        //function
        function greet(name){return "Hello,"+ name + "!"}
        console.log(greet("Ram"));//output:Hello,Ram!
        //date object
        let currentdate=new Date();
        console.log(currentdate);//output:2025-09-14T04:10:57.677Z
        //regular expression
        let pattern=/what's up/;
        let result=pattern.test("what'sup");
        let com=pattern.test("what's up");
        console.log(result);//output:false
        console.log(com);//output:true
        //Operators
        //Addition operator
        let n=7;
        let num=71;
        const res=n+num;
        let sum=5+3;
        console.log(sum);//output:8
        console.log(res);//output:78
        console.log(n+num);//output:78
        var diff=10-2;
        console.log(diff);//output:8
        const p=4*2;
        console.log(p);//output:8
        var q=8/2;
        console.log(q);//output:4
        let s=10%2;
        console.log(s);//output:0
        //Assignment Operator
        let numb=10;
        numb+=5;//n=n+5;
        console.log(numb);//output:15
        numb*=5;
        console.log(numb);//output:75
        numb/=5;
        console.log(numb);//output:15
        numb%=5;
        console.log(numb);//output:0
        //comparison operator
        let val=67
        console.log(val<45);//output:false
        console.log(10>5);//output:true
        console.log(10=="10");//output:true
        console.log('Hi'==="Hi");//output:true
        console.log(45!==45);//output:false
        console.log(45!==78);//output:true
        console.log("Hello"!="Hello");//output:false
        //logical 
        let color=true,lightColor=false;
        console.log(color&&lightColor);//output:false
        console.log(color||lightColor);//output:true
        console.log(color!=lightColor);//output:true 
        //Bitwise oprator
        const rest=5&1;
        console.log(rest);//output:1
        const object=23|45;
        console.log(object);//output:63
        var ba=5,b=7 ;
        console.log(ba^b);//output:2
        let rests=6;
        console.log(~rests);//output:-7
        let x1 = 5 << 1;
        console.log(x1);//output:10
        let x2 = -5 >> 1;
        console.log(x2);//output:-3
        let x3 = 5 >>> 1;
        console.log(x3);//output:2
        //Ternary operator
        const age1=18;
        const status=age>18?"Adult":"Minor";
        console.log(status);//output:Minor
        //Comma operator
        let nn1,nn2;
        const ress=(nn1=1,nn2=2,nn1+nn2);
        console.log(ress);//output:3
        //Unary operator : +,-,++,--,typeOf,delete,void,!
        let xx=5;
        console.log(++xx);//output:6
        console.log(xx--);//output:6
        //Relational operator :<,>,<=,>==
        const obj1={length:10};
        console.log("length"in obj1);//output:true
        console.log([] instanceof Array);//output:true
        //Bigint operator:+,-,/,%
        const big1=4567890093678792890n;
        const big2=12732429423412312339n;
        console.log(big1+big2);//output:17300319517091105229n
        //String operator
        const ss="Hello"+" "+"world";
        console.log(ss);//output:Hello world
        //Chaining operator
        const obj={name:"aman",address:{city:"delhi"}};
        console.log(obj.address?.city);//output:delhi
        console.log(obj.contact?.phone);//output:undefined
        //Control Flow Statements
        //if statement
        let xn=78;
        if(xn>78);
        console.log(xn);//output:78
        //if-else statement
        //Write an if...else statement that assigns "It's hot" to a variable weather if the temperature is over 80 degrees, and "It's nice" if the temperature is 80 degrees or cooler. Log the weather variable to the console.
        let temperature = 85; // you can change this value to test
        let weather;
        if (temperature > 80) {
        weather = "It's hot";//output:It's hot
        } else {
        weather = "It's nice";
        }
        //Ternary operator:Write a ternary statement that checks if a variable age is 18 or over. If so, assign the variable canVote to true, otherwise assign it to false. Log the canVote variable.
        console.log(weather);
        let ages=18;
        const canVote=ages>=18?"true":"false";
        console.log(canVote);//Output:true
        //Nested :Write nested conditional statements that check if a variable day is Saturday or Sunday, and if a variable time is before 11am. If both conditions are true, log "Sleep in!", else log "Wake up!".
        let day = "Saturday";
        let time = "10am";
        if (day=="Saturday"||day=="Sunday") {
        if (time < 11) {
        console.log("Sleep in!");
        } else {
        console.log("Wake up!");//output"Waker up!
        }
        }
        //if else-if else statement :Write a series of if, else if, and else statements that check if a variable temp is below 32 (freezing), between 32 and 50 (cold), between 50 and 70 (pleasant), or above 70 (hot). Log an appropriate message for each temperature range.
        var temp=68;
        if(temp<32){
            console.log("It's freezing!");
        }else if(temp>=32&&temp<=50){
            console.log("It's Cold");
        }else if(temp>=50&&temp<=70){
            console.log("It's pleasant");//output:It's pleasant
        }else{
            console.log("It's hot");
        }
        //Conditional Statements:Write conditional statements to implement a simple calculator. Have the user input two numbers and an operation ("+","-","*","/"). Based on the operation, perform the mathematical operation on the numbers and log the result. Handle division by zero gracefully without errors.
        let num1=10;
        let num2=56;
        var calc="+";
        let re;
        switch(calc){
            case "-":
                 re=num1-num2;
                console.log("results:"+re);
                break;
            case "*":
                 re=num1*num2;
                console.log("Results : "+ re);
                break;
            case "+":
                re=num1+num2;
                console.log("Results :"+ re);//output:Results:66
                break;
            case "/":
                re=mun1/num2;
                console.log("Results :" + re);
                break;
            default:
                console.log(" Handle division by zero gracefully without errors.");
        }   
        //Loops
        //for loop :Write a for loop that prints all even numbers from 0 to 10.
        for(let i=2;i<=10;i++){
            if(i%2==0){
                console.log("The prime numbers are :"+i);//output:The prime numbers are :2
//The prime numbers are :4
//The prime numbers are :6
//The prime numbers are :8
//The prime numbers are :10
            }
        }  
        //Initialize an array of 5 fruits. Use a for loop to print all the elements.
        let fruits=["Apple","Orange","Banana","Grapes","Lemon"];
        for(let i=0;i<5;i++){
            console.log(fruits[i]);//Output:Apple,Orange,Banana,Grapes,Lemon
        }
        //do-while loop
        //Take an array of numbers as input. Use a do-while loop to compute their sum by iterating over the array (hint: arrayname.length).
        let numbe=[5,10,15,20];
        let summ=0;
        let j=0;
        do{
            summ+=numbe[j];
            console.log(summ);
            j++;
        }while(j<numbe.length);
    //Write a loop that iterates from 7 to 77 and prints only those numbers which are multiples of 7. (use the modulus operator %)
    for(let k=7;k<=77;k++){
        if(k%7==0){
            console.log("The numbers which are multiples of 7 are:"+k);
            //output:The numbers which are multiples of 7 are:7
//The numbers which are multiples of 7 are:14
//The numbers which are multiples of 7 are:21
//The numbers which are multiples of 7 are:28
//The numbers which are multiples of 7 are:35
//The numbers which are multiples of 7 are:42
//The numbers which are multiples of 7 are:49
//The numbers which are multiples of 7 are:56
//The numbers which are multiples of 7 are:63
//The numbers which are multiples of 7 are:70
//The numbers which are multiples of 7 are:77
        }
    }
    //Nested loop
    //Use nested for loops to print the following pattern:
//*
//* *
//* * *
//* * * *
//* * * * *
for(var l=1;l<=5;l++){
    let row='';
    for(var o=1;o<=l;o++){
        row+="*";
    }
        console.log(row);
}
//If I need to print 2
for(let q=1;q<=5;q++){
    let rows="";
    for(let p=1;p<=5;p++){
        if(q==1||q==5||q==3){
    rows+="2";
        }else if((q==2&&p==5)||(q==4&&p==1)){
            rows+="2";
}else{
    rows+=" ";
}
    }
console.log(rows);
}