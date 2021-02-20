import express from 'express';

const app = express();

app.use(express.json());


const users = [
  "Whallysson",
  "Allain",
  "Estevam",
  "Avelino"
];

app.get('/users', (request, response) => {
  console.log('Listagem de usuários');

  const search = String(request.query.search);

  const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

  //response.send('Tudo certo!!!');
  return response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
  console.log('Busca usuário único');

  const id = Number(request.params.id);

  const user = users[id];

  return response.json(user);
});


app.post('/users', (request, response) => {
  console.log('Cira usuário');

  const data = request.body;

  const user = {
    name: data.name,
    email: data.email
  };

  return response.json(user);
});



app.listen(3333);