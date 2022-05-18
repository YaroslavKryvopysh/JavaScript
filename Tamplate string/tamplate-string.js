const firstName = 'Yaroslav';
const lastName = 'Kryvopysh';
const age = 30;

let str;

str = 'Hello my name ' + firstName + ' ' + lastName;

str = '<ul>' + 
'<li>First name: ' + firstName +'</li>'+'<li>Last name: '+ lastName + '</li>' + '<li>Age: ' + age + '</li>' +
'</ul>';

// console.log(str);

// Темплейт строка, может содержать в себе подстановки.

str = `
<ul>
<li>First name: ${firstName}</li>
<li>Last name: ${lastName}</li>
<li>Age: ${age}</li>
<li>Match.random: ${Math.random()}</li>
</ul>
`;

document.body.innerHTML = str;
