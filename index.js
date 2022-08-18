// Code your solution in this file!

const returnFirstTwoDrivers = arr => arr.slice(0, 2);

const returnLastTwoDrivers = arr => arr.slice(2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
//  console.log (selectingDrivers[0]([1,2]));

const createFareMultiplier = (int) => {
  let fare = function (fare) {
    return fare * int;
  }
  return fare;
}
// console.log(createFareMultiplier(4)(2));
const fareDoubler = createFareMultiplier(2);
//  console.log (fareDoubler(2));

const fareTripler = createFareMultiplier(3);
    


const selectDifferentDrivers = (arr,cb) => {
    return cb(arr);
}
//  console.log (selectDifferentDrivers([],returnFirstTwoDrivers);

