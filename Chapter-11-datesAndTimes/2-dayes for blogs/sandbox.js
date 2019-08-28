// Dates and Times.. Showing difference between tow dates e.g. review or article written 45 days ago
const before = new Date('February 1 2019 7:30:59');
const now = new Date();
console.log(now.getTime(), before.getTime());

const diff = now.getTime() - before.getTime();
console.log(diff);

const mins =Math.round(diff / 1000 / 60);
const hours =Math.round(mins / 60);
const days =Math.round(hours / 24);

console.log(mins, hours, days)

console.log(`the blog was written ${days} days ago`);

// Converting time stamps into date objects (e.g. when a blog was origianlly written)

const timestamp = 15669199152984;
console.log(new Date(timestamp));