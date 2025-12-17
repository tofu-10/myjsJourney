// well objects do not have their methods like array does
// so we first have to convert objects into arrays using
//objects.keys(nameofobject)  [used for creating arrays of keys only],objects.values(nameofobject) [used for creating arrays of values only], objects.entries(nameoofobject)[used for creating arrays of key value pair (array of pairs inside an array)]


let user = {
  name: "Ram",
  age: 20
};

Object.keys(user);    // ["name", "age"]
Object.values(user); // ["Ram", 20]
Object.entries(user); // [["name","Ram"], ["age",20]]



let newuser=Object.entries(user).map(([key, value]) => {
  return `${key}: ${value}`;
});

console.log(newuser);
