const user = {
    firstName: 'Yaros',
    age: 30,
    isAdmin: true,
    email: 'test@test.com',
    'user-address': {
        city:'Kharkiv'
    },
    skills:['html','css','js']
};

let value;
let prop = 'email';

value = user.firstName;
value = user[`isAdmin`];
value = user[`user-address`];
value = user[`user-address`].city;
value = user[`user-address`]['city'];
value = user[prop];


console.log(value);
console.log(user);