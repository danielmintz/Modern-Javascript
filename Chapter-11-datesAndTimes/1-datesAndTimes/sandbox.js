// Dates and Times

const now = new Date();
console.log(now);
console.log(typeof now);

//year, months, dat times

console.log('getFullYear', now.getFullYear());
console.log('getMonth', now.getMonth());
console.log('getDay', now.getDay());
console.log('getHours', now.getHours());
console.log('getMinutes', now.getMinutes());
console.log('getSeconds', now.getSeconds());


//timestamps

console.log('timestamp', now.getTime());

console.log(now.toDateString());
console.log(now.toTimeString())
console.log(now.toLocaleString()) // fav
