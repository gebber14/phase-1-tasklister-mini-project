document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    buildToDo(e.target.newToDo.value);
    form.reset();
  });
});

//This function should build the new To Do item after it is typed in
function buildToDo(toDo) {
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete)
  btn.textContent = ' x ';
  p.textContent = `${toDo}`;
  p.appendChild(btn);
  document.querySelector('#toDo_container').appendChild(p);
}

//This function should delete the To Do item after the "x" is clicked
function handleDelete(e) {
  e.target.parentNode.remove();
}
