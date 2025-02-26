// This example shows how to get an object that represents a sheet.

// How to get a sheet knowing its name.

// Find and get a sheet object by its name.

var oWorksheet = Api.GetSheet("Sheet1");
oWorksheet.GetRange("A1").SetValue("This is a sample text on 'Sheet1'.");