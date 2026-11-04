// EXCERCISE 5
// const calcAverage = (a, b, c) => {
//   return (a + b + c) / 3;
// };
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas && avgDolphins > avgKoalas * 2) {
//     console.log(`Team wins (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= avgDolphins && avgKoalas > avgDolphins * 2) {
//     console.log(`Team wins (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log(`No team wins...`);
//   }
// }

// checkWinner(scoreDolphins, scoreKoalas);

//EXCERCISE

// function calcTip(bill) {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// }

//CODING EXCERCISE 6
// const bills = [125, 555, 44];
// const tipRates = [0.15, 0.2];

// function calcTip(bill) {
//   if (bill >= 50 && bill <= 300) {
//     return bill * tipRates[0];
//   } else {
//     return bill * tipRates[1];
//   }
// }

// const tips = bills.map(function (bill) {
//   return calcTip(bill);
// });

// const totals = bills.map(function (bill, index) {
//   return bill + tips[index];
// });

// console.log(bills);
// console.log(tips);
// console.log(totals);

const jonas = {
  //key value: value
  firstName: "Jonas",
  lastName: "Smith",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  //function within object aka METHOD
  calcAge: function (birthyear) {
    return 2037 - birthyear;
  },
};

jonas.calcAge(1991);
