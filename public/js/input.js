var x = 1;
var y = 0;

const column1 = [];
const column2 = [];
const column3 = [];
const column4 = [];
const column5 = [];


function addData() {
  let addRowX = document.getElementById("transactions_table");
  let NewRow = addRowX.insertRow(x);

  let bigNumber = parseInt(document.getElementById("big_number").innerHTML)

  column1[y] = document.getElementById("purchase_date").value;
  column2[y] = parseInt(document.getElementById("price").value);
  column3[y] = document.getElementById("description").value;
  column4[y] = document.getElementById("merchant").value;
  column5[y] = document.getElementById("category").value;

  let cell1 = NewRow.insertCell(0);
  let cell2 = NewRow.insertCell(1);
  let cell3 = NewRow.insertCell(2);
  let cell4 = NewRow.insertCell(3);
  let cell5 = NewRow.insertCell(4);

  cell1.innerHTML = column1[y];
  cell2.innerHTML = '$' + column2[y];
  cell3.innerHTML = column3[y];
  cell4.innerHTML = column4[y];
  cell5.innerHTML = column5[y];



  console.log('column2[y] ~>', column2[y])
  console.log('bigNumber ~>',bigNumber);
  
  console.log('===========')

  console.log('typeof bigNumber ~>',typeof bigNumber)
  console.log('typeof column2[y] ~>',typeof column2[y])

  console.log('bigNumber-column2[y] ~>', bigNumber - column2[y])
  document.getElementById("big_number").innerHTML = bigNumber-column2[y]

  console.log('column2[y] pt2 ~>', column2[y])
  console.log('bigNumber pt2 ~>',bigNumber);

  x++;
  y++;

   
}

// I was trying to clear the input cells after the submit button was clicked

// const btn = document.getElementById('btn');
// btn.addEventListener('click', function handleClick(event) {
//   event.preventDefault();
//   const inputs = document.querySelectorAll('#purchase_date, #price, #description, #merchant, #category');
//   inputs.forEach(input => {
//     input.value = '';
//   });
// });

// purchase_date
// price
// description
// merchant
// category
