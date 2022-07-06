const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

function returnFirstTwoDrivers(){
    const first2 = drivers.slice(0,2);
    return first2;
}
function returnLastTwoDrivers(){
    const last2 = drivers.slice(2,4);
    return last2;
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num){
    return function (fare){
        return fare*num
    }    
}

function fareDoubler(fare){
    return (fare * 2)
}

function fareTripler(fare){
    return (fare * 3)
}

function selectDifferentDrivers(drivers, callback){
   console.log(drivers, callback);
    if (callback === returnFirstTwoDrivers){
   return returnFirstTwoDrivers()}
   else {
    return returnLastTwoDrivers()}
}