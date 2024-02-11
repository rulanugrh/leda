/*
Optional chaining ialah merupakan operasi dimana membandingkan antara 2 lebih dari keadaan dalam object
*/
const myself = {};
console.log(`Result is : ${myself?.mycountry?.tempattinggal}`);

const self = {
  about: {
    city: 'Jakarta'
  }
};
console.log(`Result is : ${self?.about?.city}`);