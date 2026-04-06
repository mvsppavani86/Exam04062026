/*
 Multi-User Login Validation  [5 Marks] 

You are given an array of user objects with username and password. Write a function login(users, username, password) that returns 
"Login Successful" if the credentials match any user, otherwise returns "Invalid Credentials". 

const users = [ 

  { username: "admin",   password: "1234" }, 

  { username: "trainer", password: "abcd" } 

]; 

Example:  login(users, "admin", "1234")  →  "Login Successful" 

          login(users, "admin", "wrong")  →  "Invalid Credentials" 
*/
//defining user as a customized data type with username and password as string properties
type User = {
    username: string;
    password: string;
};
//users is an array of type User with two user objects having username and password properties
let users: User[] = [
    { username: "admin", password: "1234" },
    { username: "trainer", password: "abcd" }
];

//login is function that takes an arry of user objects from users and two string parameters username and password and returns a string
function login(users: User[], username: string, password: string): string {
    for (const user of users) {
        if (user.username === username && user.password === password) {
            return "Login Successful";
        }
    }
    return "Invalid Credentials";
}



//test cases
console.log(login(users, "admin", "1234"));
console.log(login(users, "admin", "wrong"));
//negative test cases
console.log(login(users, "user", "1234"));
console.log(login(users, "admin", "abcd"));