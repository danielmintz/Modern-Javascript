import {styleBody, addTitle} from './dom';
import users, { getPremUsers }  from './data';

const premUsers = getPremUsers(users);

console.log(users, premUsers);

console.log('index file');

console.log('test 10');

styleBody();
addTitle('hello from the Dom file');

