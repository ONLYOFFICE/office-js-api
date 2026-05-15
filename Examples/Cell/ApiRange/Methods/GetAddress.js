// Read the cell address of a range and display it in another cell in a spreadsheet.

// How do I find out the address of a selected range in a spreadsheet?

// Copy a range address into a label cell to document its location on the sheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
let address = worksheet.GetRange("A1").GetAddress(true, true, "xlA1", false);
worksheet.GetRange("A3").SetValue("Address: ");
worksheet.GetRange("B3").SetValue(address);