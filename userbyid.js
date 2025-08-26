let users = [
  {id: '123', name: "John Smith", age: 20},
  {id: '456', name: "Ann Smith", age: 24},
  {id: '789', name: "Pete Peterson", age: 31},
];

groupById = (users) => {
    return users.reduce((acc, user) => {
        acc[user.id] = {...user};
        return acc;
    }, {});
}

let usersById = groupById(users);

console.log(usersById);

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/