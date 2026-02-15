//OOP
//Create a class called 'BankAccount' with attributes accountNumber, name, balance. Write a constructor, deposit() and withdraw() methods to add/subtract money from balance. Create 2 accounts, make some deposits and withdrawals, and print updated balances.
class BankAccount{
    constructor(accountNumber,name,balance){
        this.accountNumber=accountNumber;
        this.name=name;
        this.balance=balance;
    }
    //deposite() method
    deposit(amount){
        if(amount>0){
            this.balance+=amount;
            console.log(`Deposited ${amount} to ${this.name}'s account.`);
        }else{
            console.log("Deposit amount must be positive");
        }
    }
    //Withdraw() method
    withdraw(amount){
        if(amount>0&& amount<=this.balance){
            this.balance-=amount;
            console.log(`Withdrew ${amount} from ${this.name}'s account`);
        }else{
            console.log("Invalid withdraw amount");
        }
    }
    // Display balance
    displayBalance() {
        console.log(`Account: ${this.accountNumber}, Name: ${this.name}, Balance: ${this.balance}`);
    }
}
    //create 2 accounts
    const account1=new BankAccount(101,"Sora",5000);
    const account2=new BankAccount(102,"V",10000);

// Transactions on acc1
account1.deposit(2000);
account1.withdraw(1500);
account1.displayBalance();

// Transactions on acc2
account2.deposit(1000);
account2.withdraw(500);
account2.displayBalance();



//Create a JavaScript object called Rectangle with the following properties:

//- length
/*- width

And the following methods:

- area() - Calculates and returns the area of the rectangle
- perimeter() - Calculates and returns the perimeter of the rectangle

Then create a Rectangle object to represent a rectangle with length = 5 and width = 3.

Call the area() and perimeter() methods on the rectangle object and log the results to display the area and perimeter of the rectangle.

The key things to demonstrate:

- Creating an object
- Using properties
- Defining and calling methods
- Using this keyword*/

let Rectangle={
    length:5,
    width:3,
    //Method to calaclate area
area:function(){
    return this.length*this.width;
},
//method to calculate perimeter
perimeter(){
    return 2*(this.length+this.width);
}
};
//Call methods and display results
console.log("Area of Rectangle : " + Rectangle.area());
console.log("Perimeter of Rectangle : " + Rectangle.perimeter());