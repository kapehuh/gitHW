//1
let user = {
    name: 'John'
}
let a = +prompt("Enter a number: ");
Object.assign( user, { age: a });
console.log(user);

//2
let admin = Object.assign( user, { role: 'admin' } );
console.log(admin);

//3
let { name, role } = admin;
console.log(name);
console.log(role);