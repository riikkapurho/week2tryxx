const button = document.getElementById("submit-data");

button.addEventListener("click", function () {
  var table = document.getElementById("table");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);

  cell1.innerHTML = document.getElementById("input-username").value;

  cell2.innerHTML = document.getElementById("input-email").value;

  cell3.innerHTML = document.getElementById("input-address").value;

  cell4.innerHTML = document.getElementById("input-admin").value;
  console.log("success");
});

const button2 = document.getElementById("empty-table");
button2.addEventListener("click", function () {
  var table = document.getElementById("table");

  while (table.tBodies[0].rows.length > 1) {
    table.deleteRow(1);
  }
});
