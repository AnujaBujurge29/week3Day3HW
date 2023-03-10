class BankAccount{
    constructor(ownerName, balance){
        this.ownerName=ownerName;
        this.balance = balance;
        this.acctName = 112233;
    }
    deposite(depositeAmount){
        console.log("----------------------------------Parent Class----------------------------------------------------------");
        console.log("----------------------------------------------------------------------------------------------------------------");
        console.log(`Your Balance: ${this.balance} `);
        console.log(`Deposited Amount: ${depositeAmount}`);
        this.balance=this.balance+depositeAmount;
        console.log(`New Balance is: ${this.balance}`);
    }
    withdraw(withdrawamount){
        console.log("--");
        console.log("----------------------------------------Parent Class----------------------------------------------------");
        console.log("----------------------------------------------------------------------------------------------------------------");


        console.log(`Your Balance: ${this.balance} `);
        console.log(`Withdrawed Amount: ${withdrawamount}`);
        this.balance=this.balance-withdrawamount;
        console.log(`New Balance is:  ${this.balance}`);
    }
}

class CheckingAccount extends BankAccount{
    constructor(overdraftEnabled){
        this.overdraftEnabled = overdraftEnabled
    }
    static withdraw(overdraftEnabled){
        console.log("----------------------------------------CheckingAccount Class----------------------------------------------------");
        console.log("----------------------------------------------------------------------------------------------------------------");
        if(overdraftEnabled == true){
            console.log(`You can Withdraw extra $500 along with your balnace i.e. ${this.balance}`);
        }
    }
}

class SavingsAccount extends BankAccount{
    static withdraw(){
        console.log("----------------------------------------------------------------------------------------------------------------");
        console.log("----------------------------------------SavingsAccount Class----------------------------------------------------");
        console.log("----------------------------------------------------------------------------------------------------------------");
        console.log("Overdraft Facility id Dis-abled");
    }
}

const customer1 = new BankAccount("Mr. Jackson", 500 )
customer1.deposite(500);
customer1.withdraw(200)
CheckingAccount.withdraw(true)
SavingsAccount.withdraw()
