// Read the value stored in a cell in a spreadsheet.

// How do I retrieve what a cell contains in a spreadsheet?

// Display the contents of a cell in another location in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let value = worksheet.GetRange("A1").GetValue();
worksheet.GetRange("A3").SetValue("Value of the cell A1: ");
worksheet.GetRange("B3").SetValue(value);