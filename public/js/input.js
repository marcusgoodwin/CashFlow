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
  let bigNumberString = document.getElementById("big_number").innerHTML;

  let bigNumber = parseFloat(bigNumberString.replace('$', ''));


  purchase_date = document.getElementById("purchase_date").value;
  price = document.getElementById("price").value;
  description = document.getElementById("description").value;
  merchant = document.getElementById("merchant").value;
  category = document.getElementById("category").value;

  var cell1 = NewRow.insertCell(0);
  var cell2 = NewRow.insertCell(1);
  var cell3 = NewRow.insertCell(2);
  var cell4 = NewRow.insertCell(3);
  var cell5 = NewRow.insertCell(4);

  let mathResult = bigNumber - price;

  console.log('bigNumber ~>',bigNumber);
  console.log('column2[y] ~>', column2[y]);
  console.log('mathResult ~>', mathResult);
  console.log('bigNumber - column2[y] = mathResult', bigNumber , '-', price, '=', mathResult )

let element = document.getElementById("big_number");

element.classList.remove("text-red-500");
element.classList.remove("text-green-500");

  if (mathResult <= 0) {
    element.classList.add("text-red-500");
  } else {
    element.classList.add("text-green-500");
  }


  cell1.innerHTML = purchase_date;
  cell2.innerHTML = '$' + price;
  cell3.innerHTML = description;
  cell4.innerHTML = merchant;
  cell5.innerHTML = category;




  // console.log('column2[y] ~>', column2[y])
  // console.log('bigNumber ~>',bigNumber);
  
  // console.log('===========')

  // console.log('typeof bigNumber ~>',typeof bigNumber)
  // console.log('typeof column2[y] ~>',typeof column2[y])

  // console.log('bigNumber-column2[y] ~>', bigNumber - column2[y])
  
  let resultString = '$' + mathResult.toFixed(2);
  document.getElementById("big_number").innerHTML = resultString;
  element.innerHTML = resultString;



  // console.log('column2[y] pt2 ~>', column2[y])
  // console.log('bigNumber pt2 ~>',bigNumber);



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
