const addRowBtn = document.getElementById('addRowBtn');
const modal = document.getElementById('myModal');
const closeBtn = modal.querySelector('.close');
const form = modal.querySelector('form');
const table = document.getElementById('myTable');

addRowBtn.addEventListener('click', function() {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const newRow = table.insertRow();
  const cells = [
    newRow.insertCell(),
    newRow.insertCell(),
    newRow.insertCell(),
    newRow.insertCell(),
    newRow.insertCell(),
    newRow.insertCell(),
    newRow.insertCell()
  ];

  cells[0].textContent = document.getElementById('projectCode').value;
  cells[1].textContent = document.getElementById('projectName').value;
  cells[2].textContent = document.getElementById('projectOwner').value;
  cells[3].textContent = document.getElementById('numAssignees').value;
  cells[4].textContent = document.getElementById('dateCreated').value;
  cells[5].textContent = document.getElementById('updatedBy').value;
  cells[6].textContent = document.getElementById('status').value;

  modal.style.display = 'none';
  form.reset();
});


  $(document).ready(function(){
    $("#searchInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable tbody tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });



$(document).ready(function() {
  // Listen for keyup events on the input field with ID 'exampleFormControlInput1'
  $('#exampleFormControlInput1').on('keyup', function() {
    // Get the entered text from the input field and convert it to lowercase
    var inputVal = $(this).val().toLowerCase();
    // Search for the entered text in all rows of the table with ID 'myTable' and filter them accordingly
    $('#myTable tr').filter(function() {
      // Show or hide each row based on whether it matches the search term (case-insensitive)
      $(this).toggle($(this).text().toLowerCase().indexOf(inputVal) > -1)
    });
  });
});











