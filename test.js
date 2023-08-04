// for (let i = 0; i<10; i+=1){
//     console.log(i);
// }
// console.log("quwue");

// 1. сделать вары
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 4;
// let totalSalary = 0;

// // 2.перебрать работников в цикле
// for (let i = 1; i <= employees; i += 1) {
//     // 3.сгенерировать случайную зп
//     const salary = Math.round(
//         Math.random() * (maxSalary - minSalary) + minSalary,
//         )
//     console.log(`ЗП работника номер ${i} - ${salary}`);

//     // 4.прибавить к тоталу
//     totalSalary += salary;
// }

// console.log(`totalSalary: `, totalSalary);




// const cart = ["aa", "bb", "cc"];


// for(let i = 0; i < cart.length; i += 1) {

//     console.log(cart[i]);
// }
// console.log(cart);

// Работает

// const logins = ["pojdsnds", "hsdhbsdb"];

// const findLogin = function (allLogins, loginToFind){

//     let message = `User ${loginToFind} is not found`;

//     for (const login of allLogins) {
//         if(login === loginToFind) {
//             message = `User ${loginToFind} was found`;
//         }

//     }
//     return message;
// }

// console.log(findLogin(logins, "pojdsnds"));


// Найти наименьшее число

// const findSmalesstNumber = function(number) {
//     let smalestNumber = number[0];

//     if (smalestNumber > number) {
//   smalestNumber = number;
//     }

//     return smalestNumber;
// }

// console.log(findSmalesstNumber([1, 56, 67]));


// Разделение строки пробелами - слаг

// function slugify(title) {
    
//   const normalizedTitle = title.toLowerCase();
//     const words = normalizedTitle.split(" ");
//     const slug = words.join("-");
    
  
//   return slug;

//   }

// Вариант2 

//  return string.toLowerCase().split(" ").join("-");


// function filterArray(numbers, value) {
//     // Change code below this line
 
//  const newArray = [];
 
//    for(let i=numbers; i<value; i+=value) {
//      if(i > value){
//         newArray = numbers.push(value);
//      }
//   console.log(newArray);
//    }
//  return value;
//    // Change code above this line
//  }
//  filterArray([12, 24, 8, 41, 76], 20);

// Задачка

// const salary = (prompt("Введите свою зарплату:"));

// const newSalary = parseInt(salary);

// console.log(typeof newSalary);

// let tax;


// if(newSalary <= 6000) {
//   tax = 0.1;
// }

// else if(newSalary <= 10000) {
//   tax = 0.15;
// }

// else if (newSalary <= 15000) {
//   tax = 0.2;
  
// }
// else{
//   tax = 0.3;
// }

// let endSalary = newSalary - (newSalary * tax);
// console.log(`Ваша зарплата: ${endSalary}`);


// ** Задача правильная.(найти длину ключей обьекта)
// function countProps(object) {
//   let propCount = 0;
  

// const keys = Object.keys(object);

//   for(const key of keys) {
//    propCount = keys.length;
//   }

//   return propCount;

// }


// Задача 41 3 модуля

// const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Dragon breath", price: 780 },
//       { name: "Stone skin", price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//       return this.potions;
//     },
//     addPotion(newPotion) {
  
//       for(const potion of this.potions){
     
//         if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`
//       }
  
      
//     }
//       this.potions.push(newPotion);
//   },
//     removePotion(potionName) {

      
//   for(let i = 0; i < this.potions.length; i+=1) {
//   const item = this.potions[i];
    
//   if (potionName === item.name){
//     this.potions.splice(i, 1);
//     return `Potion ${potionName} is not in inventory!`;
//   }
//       }
      
//     },
//     updatePotionName(oldName, newName) {
  
//       for (const potion of this.potions) {
    
//         if(potion.name === oldName) {
//           potion.name = newName;
//           return;
          
//     }
     
//   }
//        return `Potion ${oldName} is not in inventory!`;
//     }
      
    
//   // Change code above this line
//   }
  
  
//   console.log(atTheOldToad.getPotions());
//   console.log(atTheOldToad.addPotion({ name: "Tue Ku", price: 480})); 
//   console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.removePotion('Dragon breath'));
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.updatePotionName('Tue Ku', 'Polymorth')); 

// Задача 45.48 4 модуль

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books.filter(el => el.rating > MIN_BOOK_RATING).map(el => el.author).sort((a, b) => a.localeCompare(b));
// console.log(names);



// Задача 46/48 4 модуль

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];
// const getNamesSortedByFriendCount = users => users.filter(user => user.friends).sort((a, b) => a.friends.length - b.friends.length).map(user => user.name);

//   console.log(getNamesSortedByFriendCount(users));

  

// Задача 48/48 4 модуля

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// const getTotalBalanceByGender = (users, gender) => users.filter(user => user.gender === gender).reduce((acc, user) => acc + user.balance, 0);



// console.log(getTotalBalanceByGender(users, "male"));


// задачи 7 урок


// const arr = 'var_test_text';

// const w = arr.replace(/_/g, "");

// console.log(w)

const scrollHandler = () => {
    console.log("hello, im scroll")
};
window.addEventListener('scroll', _.throttle(scrollHandler, 300))