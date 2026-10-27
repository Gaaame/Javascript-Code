const calcAverage = (a, b, c) => {
  return (a + b + c) / 3;
};
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas && avgDolphins > avgKoalas * 2) {
    console.log(`Team wins (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins && avgKoalas > avgDolphins * 2) {
    console.log(`Team wins (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`No team wins...`);
  }
}

checkWinner(scoreDolphins, scoreKoalas);
