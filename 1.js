let log = document.querySelector("#login");
let pass = document.querySelector("#pass");
let but = document.querySelector("#but");

but.addEventListener("click", function() {
  let username = log.value;
  let password = pass.value;

  const matchedUser = users.find(user => user.log === username && user.password === password);

  if (matchedUser) {
    window.open("tirlist.html", "_blank");
  } else {
    alert("Пользователь не найден");
  }
});

class User {
  constructor(log, password) {
    this.log = log;
    this.password = password;
  }
}

const users = [
  new User('user1', 'password1'),
  new User('user2', 'password2'),
  new User('user3', 'password3')
];
