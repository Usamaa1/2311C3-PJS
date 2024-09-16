// //********** POLYMORPHISM **********/
// //POLY ----> Many
// //MORPHISM ----> Forms
// //Polymorphism ----> Many Forms



// class Animal {
    
//     constructor(name,breed)
//     {
//         this.name = name;
//         this.breed = breed
//     }

//     speak() { 

//         console.log(true);
//     }
    
// }


// class Cat extends Animal
// {
//     // constructor(name,breed)
//     //     {
//     //         this.name = name;
//     //         this.breed = breed
//     //     }

//         speak(){
//                 console.log(`This Cat whose name is ${this.name} says Meow`)
//             }
            
// }

// class Goat extends Animal
// {


//         speak(says){
//                 console.log(`This Goat whose name is ${this.name} says ${says}`)
//             }
            
// }


// let tiffny = new Cat('Tiffny','Asian Cat')

// console.log(tiffny)

// tiffny.speak();

// let tommy = new Cat('Tommy','French Cat')

// console.log(tommy)

// tommy.speak()




// let henny = new Goat('Henny','Abaza')

// console.log(henny)

// let shary = new Goat('Shary','Agew')

// console.log(shary)


// henny.speak('Baaa.....')

// shary.speak('Mee.....')


class BankAccount {
    constructor(accountHolder, accountNumber, balance, accountType)
    {
        this.accountHolder = accountHolder
        this.accountNumber = accountNumber
        this.accountType = accountType
        this.balance = balance
    }


    withdraw(){}

    deposit(){}


}


class MeezanBank extends BankAccount{
    
    
    withdraw(ammountToWithdraw){
      this.balance -= ammountToWithdraw
    }

    deposit(amountToAdd)
    {
        this.balance += amountToAdd
    }
}




class UBLBank extends BankAccount{
    
    
    withdraw(ammountToWithdraw){

        if(ammountToWithdraw < this.balance)
            {

                this.balance -= ammountToWithdraw
            }
            else
            {
                console.warn('Your balance is insufficient for above transaction')
            }

    }

    deposit(amountToAdd)
    {
        this.balance += amountToAdd
    }
}



let ammirAccount = new MeezanBank('Ammir Jabbar',732498798223,34000,'Current');


// console.log(ammirAccount)

// ammirAccount.withdraw(600)

// console.log(ammirAccount)

// ammirAccount.deposit(1000)
// console.log(ammirAccount)



// ammirAccount.withdraw(70000)

// console.log(ammirAccount)



let harisAccount = new UBLBank('Haris Khan',3724827387823,68000, 'Saving');

console.log(harisAccount)

harisAccount.withdraw(80000)

console.log(harisAccount)

harisAccount.withdraw(30000)

console.log(harisAccount)


