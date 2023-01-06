    var x = 1;
		var y = 0;

    var column1 = [];
		var column2 = [];
		var column3 = [];
		var column4 = [];
    var column5 = [];

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

			x++;
			y++;
		}

// purchase_date
// price
// description
// merchant
// category
