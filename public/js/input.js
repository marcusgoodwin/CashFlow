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

// Model for the purchases table

Purchases.init(
	{
	  id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true,
	  },
	  category: {
		type: DataTypes.STRING,
		allowNull: false,
	  },
	  price: {
		type: DataTypes.STRING,
		allowNull: false,
	  },
	  description: {
		type: DataTypes.STRING,
	  },
	  purchase_date: {
		type: DataTypes.DATE,
		allowNull: false,
		defaultValue: DataTypes.NOW,
	  },
	  merchant: {
		type: DataTypes.STRING,
		allowNull: false,
	  },
	  user_id: {
		type: DataTypes.INTEGER,
		references: {
		  model: 'user',
		  key: 'id',
		},
	  },
	},
	{
	  sequelize,
	  timestamps: false,
	  freezeTableName: true,
	  underscored: true,
	  modelName: 'project',
	}
  );
