// This example shows how to get a Range object that represents the rows in the specified range.

// How to get a cell rows of a range.

// Get a range and change each cell's row value by getting all row objects.

var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("1:3");
for (var i=1; i <= 3; i++) {
	var oRows = oRange.GetRows(i);    
	oRows.SetValue(i);
}