// Get an object that represents a sheet in a spreadsheet.

// How to get a sheet knowing its name in a spreadsheet.

// Find and get a sheet object by its name in a spreadsheet.

let worksheet = Api.GetSheet("Sheet1");
worksheet.GetRange("A1").SetValue("This is a sample text on 'Sheet1'.");