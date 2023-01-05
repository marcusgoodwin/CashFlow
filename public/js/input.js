// let purchase_date = document.getElementById("purchase_date").value
// let price = document.getElementById("price").value
// let description = document.getElementById("description").value
// let merchant = document.getElementById("merchant").value
// let category = document.getElementById("category").value

// document.getElementById("submit-form").addEventColumnener("click", addData);

// function addData() {
// let purchase_date = FormData.get(floating_price);
// let price = FormData.get(floating_purchase_date);
// let description = FormData.get(floating_description);
// let merchant = FormData.get(floating_merchant);
// let category = FormData.get(floating_category);
//   console.log(purchase_date);
//   console.log(price);
//   console.log(description);
//   console.log(merchant);
//   console.log(category);
//   console.log("IT WORKED!!!")
// }cel


    var column1 = [];
		var column2 = [];
		var column3 = [];
		var column4 = [];
    var column5 = [];

		var x = 1;
		var y = 0;

    function addData(){

			var addRowX = document.getElementById('transactions_table');
			var NewRow = addRowX.insertRow(x);

			column1[y] = document.getElementById("purchase_date").value;
			column2[y] = document.getElementById("price").value;
			column3[y] = document.getElementById("description").value;
			column4[y] = document.getElementById("merchant").value;
      column5[y] = document.getElementById("category").value;

			var cell1 = NewRow.insertCell(0);
			var cell2 = NewRow.insertCell(1);
			var cell3 = NewRow.insertCell(2);
			var cell4 = NewRow.insertCell(3);
      var cell5 = NewRow.insertCell(4);

			cell1.innerHTML = column1[y];
			cell2.innerHTML = '$'+column2[y];
			cell3.innerHTML = column3[y];
			cell4.innerHTML = column4[y];
      cell5.innerHTML = column5[y];

			n++;
			x++;
		}

// purchase_date
// price
// description
// merchant
// category
