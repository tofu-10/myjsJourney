function API() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())

    .then((data) =>
      data.forEach((i) => {
        console.log(i.name + i.email);
      })
    )
    .catch((err) => console.log(err));
}

// API();

function API1() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())

    .then((data) =>
      data.map(({ name, email }) => console.log(`name: ${name}  email: ${email}`))
    )
    .catch((err) => console.log(err));
}

API1();
