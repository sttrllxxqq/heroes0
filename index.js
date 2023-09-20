Array.prototype.heroesRender = function (folderName) {
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  thead.innerHTML = `
    <tr>
      <th>Name</th>
      <th>Icon</th>
    </tr>
  `;

  table.appendChild(thead);

  this.forEach(hero => {
    const tr = document.createElement('tr');
    const name = hero.name;
    const imageName = name.replace(/\s+/g, '').toLowerCase() + '.svg';

    tr.innerHTML = `
      <td>${name}</td>
      <td>
        <img src="images/${folderName}/${imageName}" alt="${name}">
      </td>
    `;

    tbody.appendChild(tr);
  });

  table.appendChild(tbody);

  return table;
};

const marvelHeroes = [
  { name: "Thor" },
  { name: "Spider Man" }
];

const dcHeroes = [
  { name: "Superman" },
  { name: "Batman" },
  { name: "Deadpool" }
];

const marvelTable = marvelHeroes.heroesRender('marvel');
const dcTable = dcHeroes.heroesRender('dc');

document.body.appendChild(marvelTable);
document.body.appendChild(dcTable);
