// This example gets a class type and inserts it into the table.

// How to get a comment class type.

// Get an comment class type to show it in the worksheet.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
oRange.AddComment("This is just a number.");
var oComment = oRange.GetComment();
var sType = oComment.GetClassType();
oWorksheet.GetRange("A3").SetValue("Type: " + sType);