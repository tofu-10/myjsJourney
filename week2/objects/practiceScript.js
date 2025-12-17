let users = [
  { name: "Ram", age: 20, active: true },
  { name: "Shyam", age: 17, active: false },
  { name: "Hari", age: 22, active: true },
];


function activeUsers(users){
    for(i=0;i<users.length;i++){
        if(users[i].active==true){
            console.log(users[i]);
        }
    }
}

// activeUsers(users);

function olderThan18(users){
    console.log("Details of the people who are older than 18: " );
    for(i=0;i<users.length;i++){
        if(users[i].age>17){
            console.log(users[i]);
        }
    }
}
// olderThan18(users);

function oldestPersonName(users){
    console.log("Name of the oldest person is: ");
    let maxage=users[0].age;
    for(i=0;i<users.length;i++){
        if(users[i].age>maxage){
            console.log(users[i].name);
        }
    }
}

oldestPersonName(users);