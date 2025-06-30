const userList = document.getElementById('user-list');
userList.innerHTML = '<li>Cargando usuarios...</li>';

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) throw new Error('Error en la respuesta de la API');
    return response.json();
  })
  .then(users => {
    userList.innerHTML = '';
    users.forEach(user => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${user.name}</strong> - ${user.email}`;
      userList.appendChild(li);
    });
  })
  .catch(error => {
    console.error('Error:', error);
    userList.innerHTML = `<li style="color: red;">Error al cargar usuarios</li>`;
  });
