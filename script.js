function createNode(element) {
  return document.createElement(element);
}

function append(parent, element) {
  return parent.appendChild(element);
}

const ul = document.querySelector(".users");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    const people = data;
    people.forEach(person => {
      const li = createNode("li")
      const span = createNode("span")
      li.innerHTML = person.name;
      span.innerHTML = person.email;

      append(li,span);
      append(ul,li)
    });
  })