let data = [
  { id: 1, name: "sreeja", mail: "sreeja@gmail.com", phone: 9347827115, age: 25 },
  { id: 2, name: "sree", mail: "sree@gmail.com", phone: 9347827128, age: 30 },
  { id: 3, name: "sai", mail: "sai@gmail.com", phone: 9347827167, age: 22 }
];
let tableBody = document.querySelector("#dataTable tbody");
data.forEach(function(item,index) {
  let row = tableBody.insertRow(); 
  row.insertCell().textContent = item.id; 
  row.insertCell().textContent = item.name; 
  row.insertCell().textContent = item.mail;
  row.insertCell().textContent = item.phone;
  row.insertCell().textContent = item.age;
  let btnCell = row.insertCell();
  btnCell.innerHTML = '<button class="editBtn">Edit</button><button class="deleteBtn">Delete</button>'; 
  let editButton = btnCell.querySelector(".editBtn");
  editButton.addEventListener("click", function() {
    let rowData = data[index];
    console.log(rowData);
  });
});
