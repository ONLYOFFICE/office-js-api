// This example shows how to get a Range object that represents the rows in the specified range.

// How to get a cell rows of a range.

// Get a range and change each cell's row value by getting all row objects.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("1:3");
for (let i=1; i <= 3; i++) {
	let rows = range.GetRows(i);    
	rows.SetValue(i);
}