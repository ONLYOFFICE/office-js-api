// This example gets a class type and inserts it into the table.

// How to get a class type of ApiRange.

// Get a class type of ApiRange and display it in the worksheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("This is just a sample text in the cell A1.");
let classType = range.GetClassType();
worksheet.GetRange('A3').SetValue("Class type: " + classType);
